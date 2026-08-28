# `mediaconnectBridge` Submodule <a name="`mediaconnectBridge` Submodule" id="@cdktn/provider-awscc.mediaconnectBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectBridge <a name="MediaconnectBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge awscc_mediaconnect_bridge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridge(scope Construct, id *string, config MediaconnectBridgeConfig) MediaconnectBridge
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig">MediaconnectBridgeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig">MediaconnectBridgeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge">PutEgressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge">PutIngressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs">PutOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig">PutSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetEgressGatewayBridge">ResetEgressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetIngressGatewayBridge">ResetIngressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOutputs">ResetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetSourceFailoverConfig">ResetSourceFailoverConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressGatewayBridge` <a name="PutEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge"></a>

```go
func PutEgressGatewayBridge(value MediaconnectBridgeEgressGatewayBridge)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

---

##### `PutIngressGatewayBridge` <a name="PutIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge"></a>

```go
func PutIngressGatewayBridge(value MediaconnectBridgeIngressGatewayBridge)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

---

##### `PutOutputs` <a name="PutOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs"></a>

```go
func PutOutputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceFailoverConfig` <a name="PutSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig"></a>

```go
func PutSourceFailoverConfig(value MediaconnectBridgeSourceFailoverConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

---

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEgressGatewayBridge` <a name="ResetEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetEgressGatewayBridge"></a>

```go
func ResetEgressGatewayBridge()
```

##### `ResetIngressGatewayBridge` <a name="ResetIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetIngressGatewayBridge"></a>

```go
func ResetIngressGatewayBridge()
```

##### `ResetOutputs` <a name="ResetOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOutputs"></a>

```go
func ResetOutputs()
```

##### `ResetSourceFailoverConfig` <a name="ResetSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetSourceFailoverConfig"></a>

```go
func ResetSourceFailoverConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectBridge resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.MediaconnectBridge_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.MediaconnectBridge_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.MediaconnectBridge_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.MediaconnectBridge_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconnectBridge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconnectBridge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconnectBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeArn">BridgeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeState">BridgeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridge">EgressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference">MediaconnectBridgeEgressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridge">IngressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference">MediaconnectBridgeIngressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList">MediaconnectBridgeOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfig">SourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference">MediaconnectBridgeSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList">MediaconnectBridgeSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridgeInput">EgressGatewayBridgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridgeInput">IngressGatewayBridgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputsInput">OutputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArnInput">PlacementArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfigInput">SourceFailoverConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArn">PlacementArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeArn"></a>

```go
func BridgeArn() *string
```

- *Type:* *string

---

##### `BridgeState`<sup>Required</sup> <a name="BridgeState" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeState"></a>

```go
func BridgeState() *string
```

- *Type:* *string

---

##### `EgressGatewayBridge`<sup>Required</sup> <a name="EgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridge"></a>

```go
func EgressGatewayBridge() MediaconnectBridgeEgressGatewayBridgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference">MediaconnectBridgeEgressGatewayBridgeOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngressGatewayBridge`<sup>Required</sup> <a name="IngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridge"></a>

```go
func IngressGatewayBridge() MediaconnectBridgeIngressGatewayBridgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference">MediaconnectBridgeIngressGatewayBridgeOutputReference</a>

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputs"></a>

```go
func Outputs() MediaconnectBridgeOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList">MediaconnectBridgeOutputsList</a>

---

##### `SourceFailoverConfig`<sup>Required</sup> <a name="SourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfig"></a>

```go
func SourceFailoverConfig() MediaconnectBridgeSourceFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference">MediaconnectBridgeSourceFailoverConfigOutputReference</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sources"></a>

```go
func Sources() MediaconnectBridgeSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList">MediaconnectBridgeSourcesList</a>

---

##### `EgressGatewayBridgeInput`<sup>Optional</sup> <a name="EgressGatewayBridgeInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridgeInput"></a>

```go
func EgressGatewayBridgeInput() interface{}
```

- *Type:* interface{}

---

##### `IngressGatewayBridgeInput`<sup>Optional</sup> <a name="IngressGatewayBridgeInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridgeInput"></a>

```go
func IngressGatewayBridgeInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputsInput`<sup>Optional</sup> <a name="OutputsInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputsInput"></a>

```go
func OutputsInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementArnInput`<sup>Optional</sup> <a name="PlacementArnInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArnInput"></a>

```go
func PlacementArnInput() *string
```

- *Type:* *string

---

##### `SourceFailoverConfigInput`<sup>Optional</sup> <a name="SourceFailoverConfigInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfigInput"></a>

```go
func SourceFailoverConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PlacementArn`<sup>Required</sup> <a name="PlacementArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArn"></a>

```go
func PlacementArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectBridgeConfig <a name="MediaconnectBridgeConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PlacementArn: *string,
	Sources: interface{},
	EgressGatewayBridge: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge,
	IngressGatewayBridge: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge,
	Outputs: interface{},
	SourceFailoverConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.name">Name</a></code> | <code>*string</code> | The name of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.placementArn">PlacementArn</a></code> | <code>*string</code> | The placement Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sources">Sources</a></code> | <code>interface{}</code> | The sources on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.egressGatewayBridge">EgressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.ingressGatewayBridge">IngressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.outputs">Outputs</a></code> | <code>interface{}</code> | The outputs on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sourceFailoverConfig">SourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | The settings for source failover. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `PlacementArn`<sup>Required</sup> <a name="PlacementArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.placementArn"></a>

```go
PlacementArn *string
```

- *Type:* *string

The placement Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#placement_arn MediaconnectBridge#placement_arn}

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

The sources on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#sources MediaconnectBridge#sources}

---

##### `EgressGatewayBridge`<sup>Optional</sup> <a name="EgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.egressGatewayBridge"></a>

```go
EgressGatewayBridge MediaconnectBridgeEgressGatewayBridge
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}.

---

##### `IngressGatewayBridge`<sup>Optional</sup> <a name="IngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.ingressGatewayBridge"></a>

```go
IngressGatewayBridge MediaconnectBridgeIngressGatewayBridge
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}.

---

##### `Outputs`<sup>Optional</sup> <a name="Outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.outputs"></a>

```go
Outputs interface{}
```

- *Type:* interface{}

The outputs on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#outputs MediaconnectBridge#outputs}

---

##### `SourceFailoverConfig`<sup>Optional</sup> <a name="SourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sourceFailoverConfig"></a>

```go
SourceFailoverConfig MediaconnectBridgeSourceFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

The settings for source failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#source_failover_config MediaconnectBridge#source_failover_config}

---

### MediaconnectBridgeEgressGatewayBridge <a name="MediaconnectBridgeEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeEgressGatewayBridge {
	MaxBitrate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.property.maxBitrate">MaxBitrate</a></code> | <code>*f64</code> | The maximum expected bitrate of the egress bridge. |

---

##### `MaxBitrate`<sup>Optional</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.property.maxBitrate"></a>

```go
MaxBitrate *f64
```

- *Type:* *f64

The maximum expected bitrate of the egress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

### MediaconnectBridgeIngressGatewayBridge <a name="MediaconnectBridgeIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeIngressGatewayBridge {
	MaxBitrate: *f64,
	MaxOutputs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxBitrate">MaxBitrate</a></code> | <code>*f64</code> | The maximum expected bitrate of the ingress bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxOutputs">MaxOutputs</a></code> | <code>*f64</code> | The maximum number of outputs on the ingress bridge. |

---

##### `MaxBitrate`<sup>Optional</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxBitrate"></a>

```go
MaxBitrate *f64
```

- *Type:* *f64

The maximum expected bitrate of the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

##### `MaxOutputs`<sup>Optional</sup> <a name="MaxOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxOutputs"></a>

```go
MaxOutputs *f64
```

- *Type:* *f64

The maximum number of outputs on the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#max_outputs MediaconnectBridge#max_outputs}

---

### MediaconnectBridgeOutputs <a name="MediaconnectBridgeOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeOutputs {
	NetworkOutput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.property.networkOutput">NetworkOutput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | The output of the bridge. A network output is delivered to your premises. |

---

##### `NetworkOutput`<sup>Optional</sup> <a name="NetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.property.networkOutput"></a>

```go
NetworkOutput MediaconnectBridgeOutputsNetworkOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

The output of the bridge. A network output is delivered to your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#network_output MediaconnectBridge#network_output}

---

### MediaconnectBridgeOutputsNetworkOutput <a name="MediaconnectBridgeOutputsNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeOutputsNetworkOutput {
	IpAddress: *string,
	Name: *string,
	NetworkName: *string,
	Port: *f64,
	Protocol: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ipAddress">IpAddress</a></code> | <code>*string</code> | The network output IP Address. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.name">Name</a></code> | <code>*string</code> | The network output name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.networkName">NetworkName</a></code> | <code>*string</code> | The network output's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.port">Port</a></code> | <code>*f64</code> | The network output port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.protocol">Protocol</a></code> | <code>*string</code> | The network output protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ttl">Ttl</a></code> | <code>*f64</code> | The network output TTL. |

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

The network output IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#ip_address MediaconnectBridge#ip_address}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.name"></a>

```go
Name *string
```

- *Type:* *string

The network output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `NetworkName`<sup>Optional</sup> <a name="NetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.networkName"></a>

```go
NetworkName *string
```

- *Type:* *string

The network output's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The network output port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The network output protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The network output TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#ttl MediaconnectBridge#ttl}

---

### MediaconnectBridgeSourceFailoverConfig <a name="MediaconnectBridgeSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeSourceFailoverConfig {
	FailoverMode: *string,
	SourcePriority: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.failoverMode">FailoverMode</a></code> | <code>*string</code> | The type of failover you choose for this flow. FAILOVER allows switching between different streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.sourcePriority">SourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | The priority you want to assign to a source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}. |

---

##### `FailoverMode`<sup>Optional</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.failoverMode"></a>

```go
FailoverMode *string
```

- *Type:* *string

The type of failover you choose for this flow. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#failover_mode MediaconnectBridge#failover_mode}

---

##### `SourcePriority`<sup>Optional</sup> <a name="SourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.sourcePriority"></a>

```go
SourcePriority MediaconnectBridgeSourceFailoverConfigSourcePriority
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#source_priority MediaconnectBridge#source_priority}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}.

---

### MediaconnectBridgeSourceFailoverConfigSourcePriority <a name="MediaconnectBridgeSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeSourceFailoverConfigSourcePriority {
	PrimarySource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.property.primarySource">PrimarySource</a></code> | <code>*string</code> | The name of the source you choose as the primary source for this flow. |

---

##### `PrimarySource`<sup>Optional</sup> <a name="PrimarySource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.property.primarySource"></a>

```go
PrimarySource *string
```

- *Type:* *string

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#primary_source MediaconnectBridge#primary_source}

---

### MediaconnectBridgeSources <a name="MediaconnectBridgeSources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeSources {
	FlowSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource,
	NetworkSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.flowSource">FlowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.networkSource">NetworkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | The source of the bridge. A network source originates at your premises. |

---

##### `FlowSource`<sup>Optional</sup> <a name="FlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.flowSource"></a>

```go
FlowSource MediaconnectBridgeSourcesFlowSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#flow_source MediaconnectBridge#flow_source}

---

##### `NetworkSource`<sup>Optional</sup> <a name="NetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.networkSource"></a>

```go
NetworkSource MediaconnectBridgeSourcesNetworkSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

The source of the bridge. A network source originates at your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#network_source MediaconnectBridge#network_source}

---

### MediaconnectBridgeSourcesFlowSource <a name="MediaconnectBridgeSourcesFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeSourcesFlowSource {
	FlowArn: *string,
	FlowVpcInterfaceAttachment: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowArn">FlowArn</a></code> | <code>*string</code> | The ARN of the cloud flow used as a source of this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowVpcInterfaceAttachment">FlowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.name">Name</a></code> | <code>*string</code> | The name of the flow source. |

---

##### `FlowArn`<sup>Optional</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowArn"></a>

```go
FlowArn *string
```

- *Type:* *string

The ARN of the cloud flow used as a source of this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#flow_arn MediaconnectBridge#flow_arn}

---

##### `FlowVpcInterfaceAttachment`<sup>Optional</sup> <a name="FlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowVpcInterfaceAttachment"></a>

```go
FlowVpcInterfaceAttachment MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#flow_vpc_interface_attachment MediaconnectBridge#flow_vpc_interface_attachment}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

### MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment <a name="MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment {
	VpcInterfaceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | The name of the VPC interface to use for this resource. |

---

##### `VpcInterfaceName`<sup>Optional</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```go
VpcInterfaceName *string
```

- *Type:* *string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#vpc_interface_name MediaconnectBridge#vpc_interface_name}

---

### MediaconnectBridgeSourcesNetworkSource <a name="MediaconnectBridgeSourcesNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeSourcesNetworkSource {
	MulticastIp: *string,
	MulticastSourceSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings,
	Name: *string,
	NetworkName: *string,
	Port: *f64,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastIp">MulticastIp</a></code> | <code>*string</code> | The network source multicast IP. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastSourceSettings">MulticastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | The settings related to the multicast source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.name">Name</a></code> | <code>*string</code> | The name of the network source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.networkName">NetworkName</a></code> | <code>*string</code> | The network source's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.port">Port</a></code> | <code>*f64</code> | The network source port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.protocol">Protocol</a></code> | <code>*string</code> | The network source protocol. |

---

##### `MulticastIp`<sup>Optional</sup> <a name="MulticastIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastIp"></a>

```go
MulticastIp *string
```

- *Type:* *string

The network source multicast IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#multicast_ip MediaconnectBridge#multicast_ip}

---

##### `MulticastSourceSettings`<sup>Optional</sup> <a name="MulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastSourceSettings"></a>

```go
MulticastSourceSettings MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

The settings related to the multicast source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#multicast_source_settings MediaconnectBridge#multicast_source_settings}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the network source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `NetworkName`<sup>Optional</sup> <a name="NetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.networkName"></a>

```go
NetworkName *string
```

- *Type:* *string

The network source's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The network source port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The network source protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

### MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings <a name="MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

&mediaconnectbridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings {
	MulticastSourceIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.property.multicastSourceIp">MulticastSourceIp</a></code> | <code>*string</code> | The IP address of the source for source-specific multicast (SSM). |

---

##### `MulticastSourceIp`<sup>Optional</sup> <a name="MulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.property.multicastSourceIp"></a>

```go
MulticastSourceIp *string
```

- *Type:* *string

The IP address of the source for source-specific multicast (SSM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge#multicast_source_ip MediaconnectBridge#multicast_source_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectBridgeEgressGatewayBridgeOutputReference <a name="MediaconnectBridgeEgressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeEgressGatewayBridgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeEgressGatewayBridgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resetMaxBitrate">ResetMaxBitrate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBitrate` <a name="ResetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resetMaxBitrate"></a>

```go
func ResetMaxBitrate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrateInput">MaxBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate">MaxBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBitrateInput`<sup>Optional</sup> <a name="MaxBitrateInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrateInput"></a>

```go
func MaxBitrateInput() *f64
```

- *Type:* *f64

---

##### `MaxBitrate`<sup>Required</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate"></a>

```go
func MaxBitrate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeIngressGatewayBridgeOutputReference <a name="MediaconnectBridgeIngressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeIngressGatewayBridgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeIngressGatewayBridgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxBitrate">ResetMaxBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxOutputs">ResetMaxOutputs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBitrate` <a name="ResetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxBitrate"></a>

```go
func ResetMaxBitrate()
```

##### `ResetMaxOutputs` <a name="ResetMaxOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxOutputs"></a>

```go
func ResetMaxOutputs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrateInput">MaxBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputsInput">MaxOutputsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate">MaxBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs">MaxOutputs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBitrateInput`<sup>Optional</sup> <a name="MaxBitrateInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrateInput"></a>

```go
func MaxBitrateInput() *f64
```

- *Type:* *f64

---

##### `MaxOutputsInput`<sup>Optional</sup> <a name="MaxOutputsInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputsInput"></a>

```go
func MaxOutputsInput() *f64
```

- *Type:* *f64

---

##### `MaxBitrate`<sup>Required</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate"></a>

```go
func MaxBitrate() *f64
```

- *Type:* *f64

---

##### `MaxOutputs`<sup>Required</sup> <a name="MaxOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs"></a>

```go
func MaxOutputs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeOutputsList <a name="MediaconnectBridgeOutputsList" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectBridgeOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get"></a>

```go
func Get(index *f64) MediaconnectBridgeOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeOutputsNetworkOutputOutputReference <a name="MediaconnectBridgeOutputsNetworkOutputOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeOutputsNetworkOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeOutputsNetworkOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetNetworkName">ResetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNetworkName` <a name="ResetNetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetNetworkName"></a>

```go
func ResetNetworkName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkNameInput">NetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName">NetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkNameInput"></a>

```go
func NetworkNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName"></a>

```go
func NetworkName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeOutputsOutputReference <a name="MediaconnectBridgeOutputsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectBridgeOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput">PutNetworkOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resetNetworkOutput">ResetNetworkOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkOutput` <a name="PutNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput"></a>

```go
func PutNetworkOutput(value MediaconnectBridgeOutputsNetworkOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

---

##### `ResetNetworkOutput` <a name="ResetNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resetNetworkOutput"></a>

```go
func ResetNetworkOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutput">NetworkOutput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference">MediaconnectBridgeOutputsNetworkOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutputInput">NetworkOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkOutput`<sup>Required</sup> <a name="NetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutput"></a>

```go
func NetworkOutput() MediaconnectBridgeOutputsNetworkOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference">MediaconnectBridgeOutputsNetworkOutputOutputReference</a>

---

##### `NetworkOutputInput`<sup>Optional</sup> <a name="NetworkOutputInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutputInput"></a>

```go
func NetworkOutputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourceFailoverConfigOutputReference <a name="MediaconnectBridgeSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeSourceFailoverConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourceFailoverConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority">PutSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetFailoverMode">ResetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetSourcePriority">ResetSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePriority` <a name="PutSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority"></a>

```go
func PutSourcePriority(value MediaconnectBridgeSourceFailoverConfigSourcePriority)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---

##### `ResetFailoverMode` <a name="ResetFailoverMode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetFailoverMode"></a>

```go
func ResetFailoverMode()
```

##### `ResetSourcePriority` <a name="ResetSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetSourcePriority"></a>

```go
func ResetSourcePriority()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority">SourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverModeInput">FailoverModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriorityInput">SourcePriorityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode">FailoverMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourcePriority`<sup>Required</sup> <a name="SourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```go
func SourcePriority() MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `FailoverModeInput`<sup>Optional</sup> <a name="FailoverModeInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverModeInput"></a>

```go
func FailoverModeInput() *string
```

- *Type:* *string

---

##### `SourcePriorityInput`<sup>Optional</sup> <a name="SourcePriorityInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriorityInput"></a>

```go
func SourcePriorityInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `FailoverMode`<sup>Required</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode"></a>

```go
func FailoverMode() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference <a name="MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource">ResetPrimarySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimarySource` <a name="ResetPrimarySource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource"></a>

```go
func ResetPrimarySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput">PrimarySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">PrimarySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimarySourceInput`<sup>Optional</sup> <a name="PrimarySourceInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput"></a>

```go
func PrimarySourceInput() *string
```

- *Type:* *string

---

##### `PrimarySource`<sup>Required</sup> <a name="PrimarySource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```go
func PrimarySource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">ResetVpcInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcInterfaceName` <a name="ResetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```go
func ResetVpcInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">VpcInterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcInterfaceNameInput`<sup>Optional</sup> <a name="VpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```go
func VpcInterfaceNameInput() *string
```

- *Type:* *string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```go
func VpcInterfaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourcesFlowSourceOutputReference <a name="MediaconnectBridgeSourcesFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeSourcesFlowSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourcesFlowSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment">PutFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowArn">ResetFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowVpcInterfaceAttachment">ResetFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlowVpcInterfaceAttachment` <a name="PutFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment"></a>

```go
func PutFlowVpcInterfaceAttachment(value MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `ResetFlowArn` <a name="ResetFlowArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowArn"></a>

```go
func ResetFlowArn()
```

##### `ResetFlowVpcInterfaceAttachment` <a name="ResetFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowVpcInterfaceAttachment"></a>

```go
func ResetFlowVpcInterfaceAttachment()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment">FlowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArnInput">FlowArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput">FlowVpcInterfaceAttachmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowVpcInterfaceAttachment`<sup>Required</sup> <a name="FlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```go
func FlowVpcInterfaceAttachment() MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `FlowArnInput`<sup>Optional</sup> <a name="FlowArnInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArnInput"></a>

```go
func FlowArnInput() *string
```

- *Type:* *string

---

##### `FlowVpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="FlowVpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput"></a>

```go
func FlowVpcInterfaceAttachmentInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourcesList <a name="MediaconnectBridgeSourcesList" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectBridgeSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get"></a>

```go
func Get(index *f64) MediaconnectBridgeSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference <a name="MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp">ResetMulticastSourceIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMulticastSourceIp` <a name="ResetMulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp"></a>

```go
func ResetMulticastSourceIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput">MulticastSourceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">MulticastSourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MulticastSourceIpInput`<sup>Optional</sup> <a name="MulticastSourceIpInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput"></a>

```go
func MulticastSourceIpInput() *string
```

- *Type:* *string

---

##### `MulticastSourceIp`<sup>Required</sup> <a name="MulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```go
func MulticastSourceIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourcesNetworkSourceOutputReference <a name="MediaconnectBridgeSourcesNetworkSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeSourcesNetworkSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectBridgeSourcesNetworkSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings">PutMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastIp">ResetMulticastIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastSourceSettings">ResetMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetNetworkName">ResetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMulticastSourceSettings` <a name="PutMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings"></a>

```go
func PutMulticastSourceSettings(value MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---

##### `ResetMulticastIp` <a name="ResetMulticastIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastIp"></a>

```go
func ResetMulticastIp()
```

##### `ResetMulticastSourceSettings` <a name="ResetMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastSourceSettings"></a>

```go
func ResetMulticastSourceSettings()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNetworkName` <a name="ResetNetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetNetworkName"></a>

```go
func ResetNetworkName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings">MulticastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIpInput">MulticastIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettingsInput">MulticastSourceSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkNameInput">NetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp">MulticastIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName">NetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MulticastSourceSettings`<sup>Required</sup> <a name="MulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```go
func MulticastSourceSettings() MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `MulticastIpInput`<sup>Optional</sup> <a name="MulticastIpInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIpInput"></a>

```go
func MulticastIpInput() *string
```

- *Type:* *string

---

##### `MulticastSourceSettingsInput`<sup>Optional</sup> <a name="MulticastSourceSettingsInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettingsInput"></a>

```go
func MulticastSourceSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkNameInput"></a>

```go
func NetworkNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `MulticastIp`<sup>Required</sup> <a name="MulticastIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp"></a>

```go
func MulticastIp() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName"></a>

```go
func NetworkName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectBridgeSourcesOutputReference <a name="MediaconnectBridgeSourcesOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectbridge"

mediaconnectbridge.NewMediaconnectBridgeSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectBridgeSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource">PutFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource">PutNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetFlowSource">ResetFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetNetworkSource">ResetNetworkSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlowSource` <a name="PutFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource"></a>

```go
func PutFlowSource(value MediaconnectBridgeSourcesFlowSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

---

##### `PutNetworkSource` <a name="PutNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource"></a>

```go
func PutNetworkSource(value MediaconnectBridgeSourcesNetworkSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

---

##### `ResetFlowSource` <a name="ResetFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetFlowSource"></a>

```go
func ResetFlowSource()
```

##### `ResetNetworkSource` <a name="ResetNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetNetworkSource"></a>

```go
func ResetNetworkSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSource">FlowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference">MediaconnectBridgeSourcesFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSource">NetworkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference">MediaconnectBridgeSourcesNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSourceInput">FlowSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSourceInput">NetworkSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowSource`<sup>Required</sup> <a name="FlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSource"></a>

```go
func FlowSource() MediaconnectBridgeSourcesFlowSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference">MediaconnectBridgeSourcesFlowSourceOutputReference</a>

---

##### `NetworkSource`<sup>Required</sup> <a name="NetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSource"></a>

```go
func NetworkSource() MediaconnectBridgeSourcesNetworkSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference">MediaconnectBridgeSourcesNetworkSourceOutputReference</a>

---

##### `FlowSourceInput`<sup>Optional</sup> <a name="FlowSourceInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSourceInput"></a>

```go
func FlowSourceInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkSourceInput`<sup>Optional</sup> <a name="NetworkSourceInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSourceInput"></a>

```go
func NetworkSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



