# `quicksightActionConnector` Submodule <a name="`quicksightActionConnector` Submodule" id="@cdktn/provider-awscc.quicksightActionConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightActionConnector <a name="QuicksightActionConnector" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector awscc_quicksight_action_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnector(scope Construct, id *string, config QuicksightActionConnectorConfig) QuicksightActionConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig">QuicksightActionConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig">QuicksightActionConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig">PutAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetVpcConnectionArn">ResetVpcConnectionArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthenticationConfig` <a name="PutAuthenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig"></a>

```go
func PutAuthenticationConfig(value QuicksightActionConnectorAuthenticationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putPermissions"></a>

```go
func PutPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcConnectionArn` <a name="ResetVpcConnectionArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetVpcConnectionArn"></a>

```go
func ResetVpcConnectionArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightActionConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.QuicksightActionConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.QuicksightActionConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.QuicksightActionConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.QuicksightActionConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QuicksightActionConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightActionConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightActionConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightActionConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference">QuicksightActionConnectorAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.enabledActions">EnabledActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList">QuicksightActionConnectorPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList">QuicksightActionConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorIdInput">ActionConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfigInput">AuthenticationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissionsInput">PermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArnInput">VpcConnectionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorId">ActionConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArn">VpcConnectionArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthenticationConfig`<sup>Required</sup> <a name="AuthenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfig"></a>

```go
func AuthenticationConfig() QuicksightActionConnectorAuthenticationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference">QuicksightActionConnectorAuthenticationConfigOutputReference</a>

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `EnabledActions`<sup>Required</sup> <a name="EnabledActions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.enabledActions"></a>

```go
func EnabledActions() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissions"></a>

```go
func Permissions() QuicksightActionConnectorPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList">QuicksightActionConnectorPermissionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tags"></a>

```go
func Tags() QuicksightActionConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList">QuicksightActionConnectorTagsList</a>

---

##### `ActionConnectorIdInput`<sup>Optional</sup> <a name="ActionConnectorIdInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorIdInput"></a>

```go
func ActionConnectorIdInput() *string
```

- *Type:* *string

---

##### `AuthenticationConfigInput`<sup>Optional</sup> <a name="AuthenticationConfigInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfigInput"></a>

```go
func AuthenticationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissionsInput"></a>

```go
func PermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpcConnectionArnInput`<sup>Optional</sup> <a name="VpcConnectionArnInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArnInput"></a>

```go
func VpcConnectionArnInput() *string
```

- *Type:* *string

---

##### `ActionConnectorId`<sup>Required</sup> <a name="ActionConnectorId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorId"></a>

```go
func ActionConnectorId() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpcConnectionArn`<sup>Required</sup> <a name="VpcConnectionArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArn"></a>

```go
func VpcConnectionArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightActionConnectorAuthenticationConfig <a name="QuicksightActionConnectorAuthenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfig {
	AuthenticationMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata,
	AuthenticationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationMetadata">AuthenticationMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_metadata QuicksightActionConnector#authentication_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_type QuicksightActionConnector#authentication_type}. |

---

##### `AuthenticationMetadata`<sup>Required</sup> <a name="AuthenticationMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationMetadata"></a>

```go
AuthenticationMetadata QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_metadata QuicksightActionConnector#authentication_metadata}.

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_type QuicksightActionConnector#authentication_type}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata {
	ApiKeyConnectionMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata,
	AuthorizationCodeGrantMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata,
	BasicAuthConnectionMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata,
	ClientCredentialsGrantMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata,
	IamConnectionMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata,
	NoneConnectionMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.apiKeyConnectionMetadata">ApiKeyConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key_connection_metadata QuicksightActionConnector#api_key_connection_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.authorizationCodeGrantMetadata">AuthorizationCodeGrantMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_metadata QuicksightActionConnector#authorization_code_grant_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.basicAuthConnectionMetadata">BasicAuthConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#basic_auth_connection_metadata QuicksightActionConnector#basic_auth_connection_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.clientCredentialsGrantMetadata">ClientCredentialsGrantMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_metadata QuicksightActionConnector#client_credentials_grant_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.iamConnectionMetadata">IamConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#iam_connection_metadata QuicksightActionConnector#iam_connection_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.noneConnectionMetadata">NoneConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#none_connection_metadata QuicksightActionConnector#none_connection_metadata}. |

---

##### `ApiKeyConnectionMetadata`<sup>Optional</sup> <a name="ApiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.apiKeyConnectionMetadata"></a>

```go
ApiKeyConnectionMetadata QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key_connection_metadata QuicksightActionConnector#api_key_connection_metadata}.

---

##### `AuthorizationCodeGrantMetadata`<sup>Optional</sup> <a name="AuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.authorizationCodeGrantMetadata"></a>

```go
AuthorizationCodeGrantMetadata QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_metadata QuicksightActionConnector#authorization_code_grant_metadata}.

---

##### `BasicAuthConnectionMetadata`<sup>Optional</sup> <a name="BasicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.basicAuthConnectionMetadata"></a>

```go
BasicAuthConnectionMetadata QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#basic_auth_connection_metadata QuicksightActionConnector#basic_auth_connection_metadata}.

---

##### `ClientCredentialsGrantMetadata`<sup>Optional</sup> <a name="ClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.clientCredentialsGrantMetadata"></a>

```go
ClientCredentialsGrantMetadata QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_metadata QuicksightActionConnector#client_credentials_grant_metadata}.

---

##### `IamConnectionMetadata`<sup>Optional</sup> <a name="IamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.iamConnectionMetadata"></a>

```go
IamConnectionMetadata QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#iam_connection_metadata QuicksightActionConnector#iam_connection_metadata}.

---

##### `NoneConnectionMetadata`<sup>Optional</sup> <a name="NoneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.noneConnectionMetadata"></a>

```go
NoneConnectionMetadata QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#none_connection_metadata QuicksightActionConnector#none_connection_metadata}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata {
	ApiKey: *string,
	BaseEndpoint: *string,
	Email: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.apiKey">ApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key QuicksightActionConnector#api_key}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#email QuicksightActionConnector#email}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key QuicksightActionConnector#api_key}.

---

##### `BaseEndpoint`<sup>Optional</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.baseEndpoint"></a>

```go
BaseEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#email QuicksightActionConnector#email}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata {
	AuthorizationCodeGrantCredentialsDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails,
	AuthorizationCodeGrantCredentialsSource: *string,
	BaseEndpoint: *string,
	RedirectUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsDetails">AuthorizationCodeGrantCredentialsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_details QuicksightActionConnector#authorization_code_grant_credentials_details}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsSource">AuthorizationCodeGrantCredentialsSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_source QuicksightActionConnector#authorization_code_grant_credentials_source}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#redirect_url QuicksightActionConnector#redirect_url}. |

---

##### `AuthorizationCodeGrantCredentialsDetails`<sup>Optional</sup> <a name="AuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsDetails"></a>

```go
AuthorizationCodeGrantCredentialsDetails QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_details QuicksightActionConnector#authorization_code_grant_credentials_details}.

---

##### `AuthorizationCodeGrantCredentialsSource`<sup>Optional</sup> <a name="AuthorizationCodeGrantCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsSource"></a>

```go
AuthorizationCodeGrantCredentialsSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_source QuicksightActionConnector#authorization_code_grant_credentials_source}.

---

##### `BaseEndpoint`<sup>Optional</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.baseEndpoint"></a>

```go
BaseEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.redirectUrl"></a>

```go
RedirectUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#redirect_url QuicksightActionConnector#redirect_url}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails {
	AuthorizationCodeGrantDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.property.authorizationCodeGrantDetails">AuthorizationCodeGrantDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_details QuicksightActionConnector#authorization_code_grant_details}. |

---

##### `AuthorizationCodeGrantDetails`<sup>Optional</sup> <a name="AuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.property.authorizationCodeGrantDetails"></a>

```go
AuthorizationCodeGrantDetails QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_details QuicksightActionConnector#authorization_code_grant_details}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails {
	AuthorizationEndpoint: *string,
	ClientId: *string,
	ClientSecret: *string,
	TokenEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_endpoint QuicksightActionConnector#authorization_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}. |

---

##### `AuthorizationEndpoint`<sup>Optional</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_endpoint QuicksightActionConnector#authorization_endpoint}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}.

---

##### `TokenEndpoint`<sup>Optional</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata {
	BaseEndpoint: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#password QuicksightActionConnector#password}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#username QuicksightActionConnector#username}. |

---

##### `BaseEndpoint`<sup>Optional</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.baseEndpoint"></a>

```go
BaseEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#password QuicksightActionConnector#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#username QuicksightActionConnector#username}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata {
	BaseEndpoint: *string,
	ClientCredentialsDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails,
	ClientCredentialsSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsDetails">ClientCredentialsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_details QuicksightActionConnector#client_credentials_details}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsSource">ClientCredentialsSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_source QuicksightActionConnector#client_credentials_source}. |

---

##### `BaseEndpoint`<sup>Optional</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.baseEndpoint"></a>

```go
BaseEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `ClientCredentialsDetails`<sup>Optional</sup> <a name="ClientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsDetails"></a>

```go
ClientCredentialsDetails QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_details QuicksightActionConnector#client_credentials_details}.

---

##### `ClientCredentialsSource`<sup>Optional</sup> <a name="ClientCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsSource"></a>

```go
ClientCredentialsSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_source QuicksightActionConnector#client_credentials_source}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails {
	ClientCredentialsGrantDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.property.clientCredentialsGrantDetails">ClientCredentialsGrantDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_details QuicksightActionConnector#client_credentials_grant_details}. |

---

##### `ClientCredentialsGrantDetails`<sup>Optional</sup> <a name="ClientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.property.clientCredentialsGrantDetails"></a>

```go
ClientCredentialsGrantDetails QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_details QuicksightActionConnector#client_credentials_grant_details}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails {
	ClientId: *string,
	ClientSecret: *string,
	TokenEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}.

---

##### `TokenEndpoint`<sup>Optional</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata {
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#role_arn QuicksightActionConnector#role_arn}. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#role_arn QuicksightActionConnector#role_arn}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata {
	BaseEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |

---

##### `BaseEndpoint`<sup>Optional</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.property.baseEndpoint"></a>

```go
BaseEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

### QuicksightActionConnectorConfig <a name="QuicksightActionConnectorConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ActionConnectorId: *string,
	AuthenticationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig,
	AwsAccountId: *string,
	Name: *string,
	Type: *string,
	Description: *string,
	Permissions: interface{},
	Tags: interface{},
	VpcConnectionArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.actionConnectorId">ActionConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.permissions">Permissions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.vpcConnectionArn">VpcConnectionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionConnectorId`<sup>Required</sup> <a name="ActionConnectorId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.actionConnectorId"></a>

```go
ActionConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}.

---

##### `AuthenticationConfig`<sup>Required</sup> <a name="AuthenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.authenticationConfig"></a>

```go
AuthenticationConfig QuicksightActionConnectorAuthenticationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}.

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.permissions"></a>

```go
Permissions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}.

---

##### `VpcConnectionArn`<sup>Optional</sup> <a name="VpcConnectionArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.vpcConnectionArn"></a>

```go
VpcConnectionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}.

---

### QuicksightActionConnectorPermissions <a name="QuicksightActionConnectorPermissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorPermissions {
	Actions: *[]*string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.actions">Actions</a></code> | <code>*[]*string</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.principal">Principal</a></code> | <code>*string</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#actions QuicksightActionConnector#actions}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#principal QuicksightActionConnector#principal}

---

### QuicksightActionConnectorTags <a name="QuicksightActionConnectorTags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

&quicksightactionconnector.QuicksightActionConnectorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.key">Key</a></code> | <code>*string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.value">Value</a></code> | <code>*string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#key QuicksightActionConnector#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#value QuicksightActionConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetBaseEndpoint">ResetBaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBaseEndpoint` <a name="ResetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetBaseEndpoint"></a>

```go
func ResetBaseEndpoint()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetEmail"></a>

```go
func ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpointInput">BaseEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `BaseEndpointInput`<sup>Optional</sup> <a name="BaseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpointInput"></a>

```go
func BaseEndpointInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `BaseEndpoint`<sup>Required</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpoint"></a>

```go
func BaseEndpoint() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetAuthorizationEndpoint">ResetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetTokenEndpoint">ResetTokenEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationEndpoint` <a name="ResetAuthorizationEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetAuthorizationEndpoint"></a>

```go
func ResetAuthorizationEndpoint()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetTokenEndpoint` <a name="ResetTokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetTokenEndpoint"></a>

```go
func ResetTokenEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails">PutAuthorizationCodeGrantDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resetAuthorizationCodeGrantDetails">ResetAuthorizationCodeGrantDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationCodeGrantDetails` <a name="PutAuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails"></a>

```go
func PutAuthorizationCodeGrantDetails(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

---

##### `ResetAuthorizationCodeGrantDetails` <a name="ResetAuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resetAuthorizationCodeGrantDetails"></a>

```go
func ResetAuthorizationCodeGrantDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetails">AuthorizationCodeGrantDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetailsInput">AuthorizationCodeGrantDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationCodeGrantDetails`<sup>Required</sup> <a name="AuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetails"></a>

```go
func AuthorizationCodeGrantDetails() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference</a>

---

##### `AuthorizationCodeGrantDetailsInput`<sup>Optional</sup> <a name="AuthorizationCodeGrantDetailsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetailsInput"></a>

```go
func AuthorizationCodeGrantDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.putAuthorizationCodeGrantCredentialsDetails">PutAuthorizationCodeGrantCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsDetails">ResetAuthorizationCodeGrantCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsSource">ResetAuthorizationCodeGrantCredentialsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetBaseEndpoint">ResetBaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationCodeGrantCredentialsDetails` <a name="PutAuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.putAuthorizationCodeGrantCredentialsDetails"></a>

```go
func PutAuthorizationCodeGrantCredentialsDetails(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.putAuthorizationCodeGrantCredentialsDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

---

##### `ResetAuthorizationCodeGrantCredentialsDetails` <a name="ResetAuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsDetails"></a>

```go
func ResetAuthorizationCodeGrantCredentialsDetails()
```

##### `ResetAuthorizationCodeGrantCredentialsSource` <a name="ResetAuthorizationCodeGrantCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsSource"></a>

```go
func ResetAuthorizationCodeGrantCredentialsSource()
```

##### `ResetBaseEndpoint` <a name="ResetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetBaseEndpoint"></a>

```go
func ResetBaseEndpoint()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetRedirectUrl"></a>

```go
func ResetRedirectUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetails">AuthorizationCodeGrantCredentialsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetailsInput">AuthorizationCodeGrantCredentialsDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSourceInput">AuthorizationCodeGrantCredentialsSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpointInput">BaseEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSource">AuthorizationCodeGrantCredentialsSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationCodeGrantCredentialsDetails`<sup>Required</sup> <a name="AuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetails"></a>

```go
func AuthorizationCodeGrantCredentialsDetails() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference</a>

---

##### `AuthorizationCodeGrantCredentialsDetailsInput`<sup>Optional</sup> <a name="AuthorizationCodeGrantCredentialsDetailsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetailsInput"></a>

```go
func AuthorizationCodeGrantCredentialsDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationCodeGrantCredentialsSourceInput`<sup>Optional</sup> <a name="AuthorizationCodeGrantCredentialsSourceInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSourceInput"></a>

```go
func AuthorizationCodeGrantCredentialsSourceInput() *string
```

- *Type:* *string

---

##### `BaseEndpointInput`<sup>Optional</sup> <a name="BaseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpointInput"></a>

```go
func BaseEndpointInput() *string
```

- *Type:* *string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrlInput"></a>

```go
func RedirectUrlInput() *string
```

- *Type:* *string

---

##### `AuthorizationCodeGrantCredentialsSource`<sup>Required</sup> <a name="AuthorizationCodeGrantCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSource"></a>

```go
func AuthorizationCodeGrantCredentialsSource() *string
```

- *Type:* *string

---

##### `BaseEndpoint`<sup>Required</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpoint"></a>

```go
func BaseEndpoint() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetBaseEndpoint">ResetBaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseEndpoint` <a name="ResetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetBaseEndpoint"></a>

```go
func ResetBaseEndpoint()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpointInput">BaseEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseEndpointInput`<sup>Optional</sup> <a name="BaseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpointInput"></a>

```go
func BaseEndpointInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `BaseEndpoint`<sup>Required</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpoint"></a>

```go
func BaseEndpoint() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetTokenEndpoint">ResetTokenEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetTokenEndpoint` <a name="ResetTokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetTokenEndpoint"></a>

```go
func ResetTokenEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails">PutClientCredentialsGrantDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resetClientCredentialsGrantDetails">ResetClientCredentialsGrantDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientCredentialsGrantDetails` <a name="PutClientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails"></a>

```go
func PutClientCredentialsGrantDetails(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

---

##### `ResetClientCredentialsGrantDetails` <a name="ResetClientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resetClientCredentialsGrantDetails"></a>

```go
func ResetClientCredentialsGrantDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetails">ClientCredentialsGrantDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetailsInput">ClientCredentialsGrantDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCredentialsGrantDetails`<sup>Required</sup> <a name="ClientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetails"></a>

```go
func ClientCredentialsGrantDetails() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference</a>

---

##### `ClientCredentialsGrantDetailsInput`<sup>Optional</sup> <a name="ClientCredentialsGrantDetailsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetailsInput"></a>

```go
func ClientCredentialsGrantDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.putClientCredentialsDetails">PutClientCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetBaseEndpoint">ResetBaseEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsDetails">ResetClientCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsSource">ResetClientCredentialsSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientCredentialsDetails` <a name="PutClientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.putClientCredentialsDetails"></a>

```go
func PutClientCredentialsDetails(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.putClientCredentialsDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

---

##### `ResetBaseEndpoint` <a name="ResetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetBaseEndpoint"></a>

```go
func ResetBaseEndpoint()
```

##### `ResetClientCredentialsDetails` <a name="ResetClientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsDetails"></a>

```go
func ResetClientCredentialsDetails()
```

##### `ResetClientCredentialsSource` <a name="ResetClientCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsSource"></a>

```go
func ResetClientCredentialsSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetails">ClientCredentialsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpointInput">BaseEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetailsInput">ClientCredentialsDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSourceInput">ClientCredentialsSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSource">ClientCredentialsSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCredentialsDetails`<sup>Required</sup> <a name="ClientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetails"></a>

```go
func ClientCredentialsDetails() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference</a>

---

##### `BaseEndpointInput`<sup>Optional</sup> <a name="BaseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpointInput"></a>

```go
func BaseEndpointInput() *string
```

- *Type:* *string

---

##### `ClientCredentialsDetailsInput`<sup>Optional</sup> <a name="ClientCredentialsDetailsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetailsInput"></a>

```go
func ClientCredentialsDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientCredentialsSourceInput`<sup>Optional</sup> <a name="ClientCredentialsSourceInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSourceInput"></a>

```go
func ClientCredentialsSourceInput() *string
```

- *Type:* *string

---

##### `BaseEndpoint`<sup>Required</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpoint"></a>

```go
func BaseEndpoint() *string
```

- *Type:* *string

---

##### `ClientCredentialsSource`<sup>Required</sup> <a name="ClientCredentialsSource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSource"></a>

```go
func ClientCredentialsSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resetBaseEndpoint">ResetBaseEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseEndpoint` <a name="ResetBaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resetBaseEndpoint"></a>

```go
func ResetBaseEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpointInput">BaseEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpoint">BaseEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseEndpointInput`<sup>Optional</sup> <a name="BaseEndpointInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpointInput"></a>

```go
func BaseEndpointInput() *string
```

- *Type:* *string

---

##### `BaseEndpoint`<sup>Required</sup> <a name="BaseEndpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpoint"></a>

```go
func BaseEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata">PutApiKeyConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata">PutAuthorizationCodeGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata">PutBasicAuthConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata">PutClientCredentialsGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putIamConnectionMetadata">PutIamConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putNoneConnectionMetadata">PutNoneConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetApiKeyConnectionMetadata">ResetApiKeyConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetAuthorizationCodeGrantMetadata">ResetAuthorizationCodeGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetBasicAuthConnectionMetadata">ResetBasicAuthConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetClientCredentialsGrantMetadata">ResetClientCredentialsGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetIamConnectionMetadata">ResetIamConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetNoneConnectionMetadata">ResetNoneConnectionMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConnectionMetadata` <a name="PutApiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata"></a>

```go
func PutApiKeyConnectionMetadata(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

---

##### `PutAuthorizationCodeGrantMetadata` <a name="PutAuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata"></a>

```go
func PutAuthorizationCodeGrantMetadata(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

---

##### `PutBasicAuthConnectionMetadata` <a name="PutBasicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata"></a>

```go
func PutBasicAuthConnectionMetadata(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

---

##### `PutClientCredentialsGrantMetadata` <a name="PutClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata"></a>

```go
func PutClientCredentialsGrantMetadata(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

---

##### `PutIamConnectionMetadata` <a name="PutIamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putIamConnectionMetadata"></a>

```go
func PutIamConnectionMetadata(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putIamConnectionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

---

##### `PutNoneConnectionMetadata` <a name="PutNoneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putNoneConnectionMetadata"></a>

```go
func PutNoneConnectionMetadata(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putNoneConnectionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

---

##### `ResetApiKeyConnectionMetadata` <a name="ResetApiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetApiKeyConnectionMetadata"></a>

```go
func ResetApiKeyConnectionMetadata()
```

##### `ResetAuthorizationCodeGrantMetadata` <a name="ResetAuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetAuthorizationCodeGrantMetadata"></a>

```go
func ResetAuthorizationCodeGrantMetadata()
```

##### `ResetBasicAuthConnectionMetadata` <a name="ResetBasicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetBasicAuthConnectionMetadata"></a>

```go
func ResetBasicAuthConnectionMetadata()
```

##### `ResetClientCredentialsGrantMetadata` <a name="ResetClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetClientCredentialsGrantMetadata"></a>

```go
func ResetClientCredentialsGrantMetadata()
```

##### `ResetIamConnectionMetadata` <a name="ResetIamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetIamConnectionMetadata"></a>

```go
func ResetIamConnectionMetadata()
```

##### `ResetNoneConnectionMetadata` <a name="ResetNoneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetNoneConnectionMetadata"></a>

```go
func ResetNoneConnectionMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadata">ApiKeyConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadata">AuthorizationCodeGrantMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadata">BasicAuthConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadata">ClientCredentialsGrantMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadata">IamConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadata">NoneConnectionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadataInput">ApiKeyConnectionMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadataInput">AuthorizationCodeGrantMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadataInput">BasicAuthConnectionMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadataInput">ClientCredentialsGrantMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadataInput">IamConnectionMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadataInput">NoneConnectionMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyConnectionMetadata`<sup>Required</sup> <a name="ApiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadata"></a>

```go
func ApiKeyConnectionMetadata() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference</a>

---

##### `AuthorizationCodeGrantMetadata`<sup>Required</sup> <a name="AuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadata"></a>

```go
func AuthorizationCodeGrantMetadata() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference</a>

---

##### `BasicAuthConnectionMetadata`<sup>Required</sup> <a name="BasicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadata"></a>

```go
func BasicAuthConnectionMetadata() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference</a>

---

##### `ClientCredentialsGrantMetadata`<sup>Required</sup> <a name="ClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadata"></a>

```go
func ClientCredentialsGrantMetadata() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference</a>

---

##### `IamConnectionMetadata`<sup>Required</sup> <a name="IamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadata"></a>

```go
func IamConnectionMetadata() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference</a>

---

##### `NoneConnectionMetadata`<sup>Required</sup> <a name="NoneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadata"></a>

```go
func NoneConnectionMetadata() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference</a>

---

##### `ApiKeyConnectionMetadataInput`<sup>Optional</sup> <a name="ApiKeyConnectionMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadataInput"></a>

```go
func ApiKeyConnectionMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationCodeGrantMetadataInput`<sup>Optional</sup> <a name="AuthorizationCodeGrantMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadataInput"></a>

```go
func AuthorizationCodeGrantMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `BasicAuthConnectionMetadataInput`<sup>Optional</sup> <a name="BasicAuthConnectionMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadataInput"></a>

```go
func BasicAuthConnectionMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `ClientCredentialsGrantMetadataInput`<sup>Optional</sup> <a name="ClientCredentialsGrantMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadataInput"></a>

```go
func ClientCredentialsGrantMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `IamConnectionMetadataInput`<sup>Optional</sup> <a name="IamConnectionMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadataInput"></a>

```go
func IamConnectionMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `NoneConnectionMetadataInput`<sup>Optional</sup> <a name="NoneConnectionMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadataInput"></a>

```go
func NoneConnectionMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorAuthenticationConfigOutputReference <a name="QuicksightActionConnectorAuthenticationConfigOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorAuthenticationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightActionConnectorAuthenticationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata">PutAuthenticationMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationMetadata` <a name="PutAuthenticationMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata"></a>

```go
func PutAuthenticationMetadata(value QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadata">AuthenticationMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadataInput">AuthenticationMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationMetadata`<sup>Required</sup> <a name="AuthenticationMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadata"></a>

```go
func AuthenticationMetadata() QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference</a>

---

##### `AuthenticationMetadataInput`<sup>Optional</sup> <a name="AuthenticationMetadataInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadataInput"></a>

```go
func AuthenticationMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorPermissionsList <a name="QuicksightActionConnectorPermissionsList" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightActionConnectorPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.get"></a>

```go
func Get(index *f64) QuicksightActionConnectorPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorPermissionsOutputReference <a name="QuicksightActionConnectorPermissionsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightActionConnectorPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorTagsList <a name="QuicksightActionConnectorTagsList" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightActionConnectorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.get"></a>

```go
func Get(index *f64) QuicksightActionConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightActionConnectorTagsOutputReference <a name="QuicksightActionConnectorTagsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightactionconnector"

quicksightactionconnector.NewQuicksightActionConnectorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightActionConnectorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



