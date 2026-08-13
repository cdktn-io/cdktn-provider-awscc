# `mediaconnectBridgeSource` Submodule <a name="`mediaconnectBridgeSource` Submodule" id="@cdktn/provider-awscc.mediaconnectBridgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectBridgeSource <a name="MediaconnectBridgeSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source awscc_mediaconnect_bridge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

mediaconnectbridgesource.NewMediaconnectBridgeSource(scope Construct, id *string, config MediaconnectBridgeSourceConfig) MediaconnectBridgeSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig">MediaconnectBridgeSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig">MediaconnectBridgeSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putFlowSource">PutFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putNetworkSource">PutNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetFlowSource">ResetFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetNetworkSource">ResetNetworkSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFlowSource` <a name="PutFlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putFlowSource"></a>

```go
func PutFlowSource(value MediaconnectBridgeSourceFlowSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putFlowSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

---

##### `PutNetworkSource` <a name="PutNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putNetworkSource"></a>

```go
func PutNetworkSource(value MediaconnectBridgeSourceNetworkSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putNetworkSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

---

##### `ResetFlowSource` <a name="ResetFlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetFlowSource"></a>

```go
func ResetFlowSource()
```

##### `ResetNetworkSource` <a name="ResetNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetNetworkSource"></a>

```go
func ResetNetworkSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectBridgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

mediaconnectbridgesource.MediaconnectBridgeSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

mediaconnectbridgesource.MediaconnectBridgeSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

mediaconnectbridgesource.MediaconnectBridgeSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

mediaconnectbridgesource.MediaconnectBridgeSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconnectBridgeSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconnectBridgeSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconnectBridgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectBridgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSource">FlowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference">MediaconnectBridgeSourceFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSource">NetworkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference">MediaconnectBridgeSourceNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArnInput">BridgeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSourceInput">FlowSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSourceInput">NetworkSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArn">BridgeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FlowSource`<sup>Required</sup> <a name="FlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSource"></a>

```go
func FlowSource() MediaconnectBridgeSourceFlowSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference">MediaconnectBridgeSourceFlowSourceOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkSource`<sup>Required</sup> <a name="NetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSource"></a>

```go
func NetworkSource() MediaconnectBridgeSourceNetworkSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference">MediaconnectBridgeSourceNetworkSourceOutputReference</a>

---

##### `BridgeArnInput`<sup>Optional</sup> <a name="BridgeArnInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArnInput"></a>

```go
func BridgeArnInput() *string
```

- *Type:* *string

---

##### `FlowSourceInput`<sup>Optional</sup> <a name="FlowSourceInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSourceInput"></a>

```go
func FlowSourceInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkSourceInput`<sup>Optional</sup> <a name="NetworkSourceInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSourceInput"></a>

```go
func NetworkSourceInput() interface{}
```

- *Type:* interface{}

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArn"></a>

```go
func BridgeArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectBridgeSourceConfig <a name="MediaconnectBridgeSourceConfig" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

&mediaconnectbridgesource.MediaconnectBridgeSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BridgeArn: *string,
	Name: *string,
	FlowSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource,
	NetworkSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.bridgeArn">BridgeArn</a></code> | <code>*string</code> | The Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.name">Name</a></code> | <code>*string</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.flowSource">FlowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a></code> | The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.networkSource">NetworkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a></code> | The source of the bridge. A network source originates at your premises. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.bridgeArn"></a>

```go
BridgeArn *string
```

- *Type:* *string

The Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#bridge_arn MediaconnectBridgeSource#bridge_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#name MediaconnectBridgeSource#name}

---

##### `FlowSource`<sup>Optional</sup> <a name="FlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.flowSource"></a>

```go
FlowSource MediaconnectBridgeSourceFlowSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#flow_source MediaconnectBridgeSource#flow_source}

---

##### `NetworkSource`<sup>Optional</sup> <a name="NetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.networkSource"></a>

```go
NetworkSource MediaconnectBridgeSourceNetworkSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

The source of the bridge. A network source originates at your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#network_source MediaconnectBridgeSource#network_source}

---

### MediaconnectBridgeSourceFlowSource <a name="MediaconnectBridgeSourceFlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

&mediaconnectbridgesource.MediaconnectBridgeSourceFlowSource {
	FlowArn: *string,
	FlowVpcInterfaceAttachment: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowArn">FlowArn</a></code> | <code>*string</code> | The ARN of the cloud flow used as a source of this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowVpcInterfaceAttachment">FlowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this source. |

---

##### `FlowArn`<sup>Optional</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowArn"></a>

```go
FlowArn *string
```

- *Type:* *string

The ARN of the cloud flow used as a source of this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#flow_arn MediaconnectBridgeSource#flow_arn}

---

##### `FlowVpcInterfaceAttachment`<sup>Optional</sup> <a name="FlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowVpcInterfaceAttachment"></a>

```go
FlowVpcInterfaceAttachment MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#flow_vpc_interface_attachment MediaconnectBridgeSource#flow_vpc_interface_attachment}

---

### MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment <a name="MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

&mediaconnectbridgesource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment {
	VpcInterfaceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | The name of the VPC interface to use for this resource. |

---

##### `VpcInterfaceName`<sup>Optional</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```go
VpcInterfaceName *string
```

- *Type:* *string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#vpc_interface_name MediaconnectBridgeSource#vpc_interface_name}

---

### MediaconnectBridgeSourceNetworkSource <a name="MediaconnectBridgeSourceNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

&mediaconnectbridgesource.MediaconnectBridgeSourceNetworkSource {
	MulticastIp: *string,
	MulticastSourceSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings,
	NetworkName: *string,
	Port: *f64,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastIp">MulticastIp</a></code> | <code>*string</code> | The network source multicast IP. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastSourceSettings">MulticastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a></code> | The settings related to the multicast source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.networkName">NetworkName</a></code> | <code>*string</code> | The network source's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.port">Port</a></code> | <code>*f64</code> | The network source port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.protocol">Protocol</a></code> | <code>*string</code> | The network source protocol. |

---

##### `MulticastIp`<sup>Optional</sup> <a name="MulticastIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastIp"></a>

```go
MulticastIp *string
```

- *Type:* *string

The network source multicast IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#multicast_ip MediaconnectBridgeSource#multicast_ip}

---

##### `MulticastSourceSettings`<sup>Optional</sup> <a name="MulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastSourceSettings"></a>

```go
MulticastSourceSettings MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

The settings related to the multicast source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#multicast_source_settings MediaconnectBridgeSource#multicast_source_settings}

---

##### `NetworkName`<sup>Optional</sup> <a name="NetworkName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.networkName"></a>

```go
NetworkName *string
```

- *Type:* *string

The network source's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#network_name MediaconnectBridgeSource#network_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The network source port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#port MediaconnectBridgeSource#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The network source protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#protocol MediaconnectBridgeSource#protocol}

---

### MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings <a name="MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

&mediaconnectbridgesource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings {
	MulticastSourceIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.property.multicastSourceIp">MulticastSourceIp</a></code> | <code>*string</code> | The IP address of the source for source-specific multicast (SSM). |

---

##### `MulticastSourceIp`<sup>Optional</sup> <a name="MulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.property.multicastSourceIp"></a>

```go
MulticastSourceIp *string
```

- *Type:* *string

The IP address of the source for source-specific multicast (SSM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#multicast_source_ip MediaconnectBridgeSource#multicast_source_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

mediaconnectbridgesource.NewMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">ResetVpcInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcInterfaceName` <a name="ResetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```go
func ResetVpcInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">VpcInterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcInterfaceNameInput`<sup>Optional</sup> <a name="VpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```go
func VpcInterfaceNameInput() *string
```

- *Type:* *string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```go
func VpcInterfaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourceFlowSourceOutputReference <a name="MediaconnectBridgeSourceFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

mediaconnectbridgesource.NewMediaconnectBridgeSourceFlowSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourceFlowSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.putFlowVpcInterfaceAttachment">PutFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowArn">ResetFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowVpcInterfaceAttachment">ResetFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlowVpcInterfaceAttachment` <a name="PutFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.putFlowVpcInterfaceAttachment"></a>

```go
func PutFlowVpcInterfaceAttachment(value MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.putFlowVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `ResetFlowArn` <a name="ResetFlowArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowArn"></a>

```go
func ResetFlowArn()
```

##### `ResetFlowVpcInterfaceAttachment` <a name="ResetFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowVpcInterfaceAttachment"></a>

```go
func ResetFlowVpcInterfaceAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment">FlowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArnInput">FlowArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput">FlowVpcInterfaceAttachmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowVpcInterfaceAttachment`<sup>Required</sup> <a name="FlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```go
func FlowVpcInterfaceAttachment() MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `FlowArnInput`<sup>Optional</sup> <a name="FlowArnInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArnInput"></a>

```go
func FlowArnInput() *string
```

- *Type:* *string

---

##### `FlowVpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="FlowVpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput"></a>

```go
func FlowVpcInterfaceAttachmentInput() interface{}
```

- *Type:* interface{}

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference <a name="MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

mediaconnectbridgesource.NewMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp">ResetMulticastSourceIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMulticastSourceIp` <a name="ResetMulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp"></a>

```go
func ResetMulticastSourceIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput">MulticastSourceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">MulticastSourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MulticastSourceIpInput`<sup>Optional</sup> <a name="MulticastSourceIpInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput"></a>

```go
func MulticastSourceIpInput() *string
```

- *Type:* *string

---

##### `MulticastSourceIp`<sup>Required</sup> <a name="MulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```go
func MulticastSourceIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourceNetworkSourceOutputReference <a name="MediaconnectBridgeSourceNetworkSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridgesource"

mediaconnectbridgesource.NewMediaconnectBridgeSourceNetworkSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourceNetworkSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.putMulticastSourceSettings">PutMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastIp">ResetMulticastIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastSourceSettings">ResetMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetNetworkName">ResetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMulticastSourceSettings` <a name="PutMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.putMulticastSourceSettings"></a>

```go
func PutMulticastSourceSettings(value MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.putMulticastSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

---

##### `ResetMulticastIp` <a name="ResetMulticastIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastIp"></a>

```go
func ResetMulticastIp()
```

##### `ResetMulticastSourceSettings` <a name="ResetMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastSourceSettings"></a>

```go
func ResetMulticastSourceSettings()
```

##### `ResetNetworkName` <a name="ResetNetworkName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetNetworkName"></a>

```go
func ResetNetworkName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings">MulticastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIpInput">MulticastIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettingsInput">MulticastSourceSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkNameInput">NetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp">MulticastIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName">NetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MulticastSourceSettings`<sup>Required</sup> <a name="MulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```go
func MulticastSourceSettings() MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `MulticastIpInput`<sup>Optional</sup> <a name="MulticastIpInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIpInput"></a>

```go
func MulticastIpInput() *string
```

- *Type:* *string

---

##### `MulticastSourceSettingsInput`<sup>Optional</sup> <a name="MulticastSourceSettingsInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettingsInput"></a>

```go
func MulticastSourceSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkNameInput"></a>

```go
func NetworkNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `MulticastIp`<sup>Required</sup> <a name="MulticastIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp"></a>

```go
func MulticastIp() *string
```

- *Type:* *string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName"></a>

```go
func NetworkName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



