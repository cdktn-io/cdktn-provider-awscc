# `mediaconnectFlow` Submodule <a name="`mediaconnectFlow` Submodule" id="@cdktn/provider-awscc.mediaconnectFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlow <a name="MediaconnectFlow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow awscc_mediaconnect_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlow(scope Construct, id *string, config MediaconnectFlowConfig) MediaconnectFlow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig">MediaconnectFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig">MediaconnectFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance">PutMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams">PutMediaStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig">PutSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig">PutSourceMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces">PutVpcInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMaintenance">ResetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMediaStreams">ResetMediaStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceFailoverConfig">ResetSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceMonitoringConfig">ResetSourceMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetVpcInterfaces">ResetVpcInterfaces</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenance` <a name="PutMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance"></a>

```go
func PutMaintenance(value MediaconnectFlowMaintenance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

---

##### `PutMediaStreams` <a name="PutMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams"></a>

```go
func PutMediaStreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource"></a>

```go
func PutSource(value MediaconnectFlowSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

---

##### `PutSourceFailoverConfig` <a name="PutSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig"></a>

```go
func PutSourceFailoverConfig(value MediaconnectFlowSourceFailoverConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

---

##### `PutSourceMonitoringConfig` <a name="PutSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig"></a>

```go
func PutSourceMonitoringConfig(value MediaconnectFlowSourceMonitoringConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

---

##### `PutVpcInterfaces` <a name="PutVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces"></a>

```go
func PutVpcInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMaintenance"></a>

```go
func ResetMaintenance()
```

##### `ResetMediaStreams` <a name="ResetMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMediaStreams"></a>

```go
func ResetMediaStreams()
```

##### `ResetSourceFailoverConfig` <a name="ResetSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceFailoverConfig"></a>

```go
func ResetSourceFailoverConfig()
```

##### `ResetSourceMonitoringConfig` <a name="ResetSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceMonitoringConfig"></a>

```go
func ResetSourceMonitoringConfig()
```

##### `ResetVpcInterfaces` <a name="ResetVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetVpcInterfaces"></a>

```go
func ResetVpcInterfaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.MediaconnectFlow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.MediaconnectFlow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.MediaconnectFlow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.MediaconnectFlow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconnectFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconnectFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconnectFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.egressIp">EgressIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowAvailabilityZone">FlowAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenance">Maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference">MediaconnectFlowMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreams">MediaStreams</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList">MediaconnectFlowMediaStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference">MediaconnectFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfig">SourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference">MediaconnectFlowSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfig">SourceMonitoringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference">MediaconnectFlowSourceMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfaces">VpcInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList">MediaconnectFlowVpcInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenanceInput">MaintenanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreamsInput">MediaStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfigInput">SourceFailoverConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfigInput">SourceMonitoringConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfacesInput">VpcInterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EgressIp`<sup>Required</sup> <a name="EgressIp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.egressIp"></a>

```go
func EgressIp() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `FlowAvailabilityZone`<sup>Required</sup> <a name="FlowAvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowAvailabilityZone"></a>

```go
func FlowAvailabilityZone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenance"></a>

```go
func Maintenance() MediaconnectFlowMaintenanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference">MediaconnectFlowMaintenanceOutputReference</a>

---

##### `MediaStreams`<sup>Required</sup> <a name="MediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreams"></a>

```go
func MediaStreams() MediaconnectFlowMediaStreamsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList">MediaconnectFlowMediaStreamsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.source"></a>

```go
func Source() MediaconnectFlowSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference">MediaconnectFlowSourceOutputReference</a>

---

##### `SourceFailoverConfig`<sup>Required</sup> <a name="SourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfig"></a>

```go
func SourceFailoverConfig() MediaconnectFlowSourceFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference">MediaconnectFlowSourceFailoverConfigOutputReference</a>

---

##### `SourceMonitoringConfig`<sup>Required</sup> <a name="SourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfig"></a>

```go
func SourceMonitoringConfig() MediaconnectFlowSourceMonitoringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference">MediaconnectFlowSourceMonitoringConfigOutputReference</a>

---

##### `VpcInterfaces`<sup>Required</sup> <a name="VpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfaces"></a>

```go
func VpcInterfaces() MediaconnectFlowVpcInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList">MediaconnectFlowVpcInterfacesList</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenanceInput"></a>

```go
func MaintenanceInput() interface{}
```

- *Type:* interface{}

---

##### `MediaStreamsInput`<sup>Optional</sup> <a name="MediaStreamsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreamsInput"></a>

```go
func MediaStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceFailoverConfigInput`<sup>Optional</sup> <a name="SourceFailoverConfigInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfigInput"></a>

```go
func SourceFailoverConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `SourceMonitoringConfigInput`<sup>Optional</sup> <a name="SourceMonitoringConfigInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfigInput"></a>

```go
func SourceMonitoringConfigInput() interface{}
```

- *Type:* interface{}

---

##### `VpcInterfacesInput`<sup>Optional</sup> <a name="VpcInterfacesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfacesInput"></a>

```go
func VpcInterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowConfig <a name="MediaconnectFlowConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Source: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSource,
	AvailabilityZone: *string,
	Maintenance: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowMaintenance,
	MediaStreams: interface{},
	SourceFailoverConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig,
	SourceMonitoringConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig,
	VpcInterfaces: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.name">Name</a></code> | <code>*string</code> | The name of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | The source of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The Availability Zone that you want to create the flow in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.maintenance">Maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | The maintenance settings you want to use for the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.mediaStreams">MediaStreams</a></code> | <code>interface{}</code> | The media streams associated with the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceFailoverConfig">SourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | The source failover config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceMonitoringConfig">SourceMonitoringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | The source monitoring config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.vpcInterfaces">VpcInterfaces</a></code> | <code>interface{}</code> | The VPC interfaces that you added to this flow. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.source"></a>

```go
Source MediaconnectFlowSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

The source of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source MediaconnectFlow#source}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The Availability Zone that you want to create the flow in.

These options are limited to the Availability Zones within the current AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#availability_zone MediaconnectFlow#availability_zone}

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.maintenance"></a>

```go
Maintenance MediaconnectFlowMaintenance
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

The maintenance settings you want to use for the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#maintenance MediaconnectFlow#maintenance}

---

##### `MediaStreams`<sup>Optional</sup> <a name="MediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.mediaStreams"></a>

```go
MediaStreams interface{}
```

- *Type:* interface{}

The media streams associated with the flow.

You can associate any of these media streams with sources and outputs on the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_streams MediaconnectFlow#media_streams}

---

##### `SourceFailoverConfig`<sup>Optional</sup> <a name="SourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceFailoverConfig"></a>

```go
SourceFailoverConfig MediaconnectFlowSourceFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

The source failover config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_failover_config MediaconnectFlow#source_failover_config}

---

##### `SourceMonitoringConfig`<sup>Optional</sup> <a name="SourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceMonitoringConfig"></a>

```go
SourceMonitoringConfig MediaconnectFlowSourceMonitoringConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

The source monitoring config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_monitoring_config MediaconnectFlow#source_monitoring_config}

---

##### `VpcInterfaces`<sup>Optional</sup> <a name="VpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.vpcInterfaces"></a>

```go
VpcInterfaces interface{}
```

- *Type:* interface{}

The VPC interfaces that you added to this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interfaces MediaconnectFlow#vpc_interfaces}

---

### MediaconnectFlowMaintenance <a name="MediaconnectFlowMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowMaintenance {
	MaintenanceDay: *string,
	MaintenanceStartHour: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceDay">MaintenanceDay</a></code> | <code>*string</code> | A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceStartHour">MaintenanceStartHour</a></code> | <code>*string</code> | UTC time when the maintenance will happen. |

---

##### `MaintenanceDay`<sup>Optional</sup> <a name="MaintenanceDay" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceDay"></a>

```go
MaintenanceDay *string
```

- *Type:* *string

A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#maintenance_day MediaconnectFlow#maintenance_day}

---

##### `MaintenanceStartHour`<sup>Optional</sup> <a name="MaintenanceStartHour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceStartHour"></a>

```go
MaintenanceStartHour *string
```

- *Type:* *string

UTC time when the maintenance will happen.

Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#maintenance_start_hour MediaconnectFlow#maintenance_start_hour}

---

### MediaconnectFlowMediaStreams <a name="MediaconnectFlowMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowMediaStreams {
	Attributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes,
	ClockRate: *f64,
	Description: *string,
	Fmt: *f64,
	MediaStreamId: *f64,
	MediaStreamName: *string,
	MediaStreamType: *string,
	VideoFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.clockRate">ClockRate</a></code> | <code>*f64</code> | The sample rate for the stream. This value in measured in kHz. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.description">Description</a></code> | <code>*string</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.fmt">Fmt</a></code> | <code>*f64</code> | The format type number (sometimes referred to as RTP payload type) of the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamId">MediaStreamId</a></code> | <code>*f64</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamName">MediaStreamName</a></code> | <code>*string</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamType">MediaStreamType</a></code> | <code>*string</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.videoFormat">VideoFormat</a></code> | <code>*string</code> | The resolution of the video. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.attributes"></a>

```go
Attributes MediaconnectFlowMediaStreamsAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#attributes MediaconnectFlow#attributes}

---

##### `ClockRate`<sup>Optional</sup> <a name="ClockRate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.clockRate"></a>

```go
ClockRate *f64
```

- *Type:* *f64

The sample rate for the stream. This value in measured in kHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#clock_rate MediaconnectFlow#clock_rate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}

---

##### `Fmt`<sup>Optional</sup> <a name="Fmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.fmt"></a>

```go
Fmt *f64
```

- *Type:* *f64

The format type number (sometimes referred to as RTP payload type) of the media stream.

MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#fmt MediaconnectFlow#fmt}

---

##### `MediaStreamId`<sup>Optional</sup> <a name="MediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamId"></a>

```go
MediaStreamId *f64
```

- *Type:* *f64

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_id MediaconnectFlow#media_stream_id}

---

##### `MediaStreamName`<sup>Optional</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamName"></a>

```go
MediaStreamName *string
```

- *Type:* *string

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}

---

##### `MediaStreamType`<sup>Optional</sup> <a name="MediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamType"></a>

```go
MediaStreamType *string
```

- *Type:* *string

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_type MediaconnectFlow#media_stream_type}

---

##### `VideoFormat`<sup>Optional</sup> <a name="VideoFormat" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.videoFormat"></a>

```go
VideoFormat *string
```

- *Type:* *string

The resolution of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#video_format MediaconnectFlow#video_format}

---

### MediaconnectFlowMediaStreamsAttributes <a name="MediaconnectFlowMediaStreamsAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowMediaStreamsAttributes {
	Fmtp: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp,
	Lang: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.fmtp">Fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | A set of parameters that define the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.lang">Lang</a></code> | <code>*string</code> | The audio language, in a format that is recognized by the receiver. |

---

##### `Fmtp`<sup>Optional</sup> <a name="Fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.fmtp"></a>

```go
Fmtp MediaconnectFlowMediaStreamsAttributesFmtp
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#fmtp MediaconnectFlow#fmtp}

---

##### `Lang`<sup>Optional</sup> <a name="Lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.lang"></a>

```go
Lang *string
```

- *Type:* *string

The audio language, in a format that is recognized by the receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#lang MediaconnectFlow#lang}

---

### MediaconnectFlowMediaStreamsAttributesFmtp <a name="MediaconnectFlowMediaStreamsAttributesFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowMediaStreamsAttributesFmtp {
	ChannelOrder: *string,
	Colorimetry: *string,
	ExactFramerate: *string,
	Par: *string,
	Range: *string,
	ScanMode: *string,
	Tcs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.channelOrder">ChannelOrder</a></code> | <code>*string</code> | The format of the audio channel. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.colorimetry">Colorimetry</a></code> | <code>*string</code> | The format used for the representation of color. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.exactFramerate">ExactFramerate</a></code> | <code>*string</code> | The frame rate for the video stream, in frames/second. For example: 60000/1001. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.par">Par</a></code> | <code>*string</code> | The pixel aspect ratio (PAR) of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.range">Range</a></code> | <code>*string</code> | The encoding range of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.scanMode">ScanMode</a></code> | <code>*string</code> | The type of compression that was used to smooth the video's appearance. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.tcs">Tcs</a></code> | <code>*string</code> | The transfer characteristic system (TCS) that is used in the video. |

---

##### `ChannelOrder`<sup>Optional</sup> <a name="ChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.channelOrder"></a>

```go
ChannelOrder *string
```

- *Type:* *string

The format of the audio channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#channel_order MediaconnectFlow#channel_order}

---

##### `Colorimetry`<sup>Optional</sup> <a name="Colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.colorimetry"></a>

```go
Colorimetry *string
```

- *Type:* *string

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#colorimetry MediaconnectFlow#colorimetry}

---

##### `ExactFramerate`<sup>Optional</sup> <a name="ExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.exactFramerate"></a>

```go
ExactFramerate *string
```

- *Type:* *string

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#exact_framerate MediaconnectFlow#exact_framerate}

---

##### `Par`<sup>Optional</sup> <a name="Par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.par"></a>

```go
Par *string
```

- *Type:* *string

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#par MediaconnectFlow#par}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.range"></a>

```go
Range *string
```

- *Type:* *string

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#range MediaconnectFlow#range}

---

##### `ScanMode`<sup>Optional</sup> <a name="ScanMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.scanMode"></a>

```go
ScanMode *string
```

- *Type:* *string

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#scan_mode MediaconnectFlow#scan_mode}

---

##### `Tcs`<sup>Optional</sup> <a name="Tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.tcs"></a>

```go
Tcs *string
```

- *Type:* *string

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#tcs MediaconnectFlow#tcs}

---

### MediaconnectFlowSource <a name="MediaconnectFlowSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSource {
	Decryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption,
	Description: *string,
	EntitlementArn: *string,
	GatewayBridgeSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource,
	IngestPort: *f64,
	MaxBitrate: *f64,
	MaxLatency: *f64,
	MaxSyncBuffer: *f64,
	MediaStreamSourceConfigurations: interface{},
	MinLatency: *f64,
	Name: *string,
	Protocol: *string,
	SenderControlPort: *f64,
	SenderIpAddress: *string,
	SourceListenerAddress: *string,
	SourceListenerPort: *f64,
	StreamId: *string,
	VpcInterfaceName: *string,
	WhitelistCidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | The type of decryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.description">Description</a></code> | <code>*string</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.entitlementArn">EntitlementArn</a></code> | <code>*string</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.gatewayBridgeSource">GatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.ingestPort">IngestPort</a></code> | <code>*f64</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxBitrate">MaxBitrate</a></code> | <code>*f64</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxLatency">MaxLatency</a></code> | <code>*f64</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxSyncBuffer">MaxSyncBuffer</a></code> | <code>*f64</code> | The size of the buffer (in milliseconds) to use to sync incoming source data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.mediaStreamSourceConfigurations">MediaStreamSourceConfigurations</a></code> | <code>interface{}</code> | The media stream that is associated with the source, and the parameters for that association. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.minLatency">MinLatency</a></code> | <code>*f64</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.name">Name</a></code> | <code>*string</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderControlPort">SenderControlPort</a></code> | <code>*f64</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderIpAddress">SenderIpAddress</a></code> | <code>*string</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerAddress">SourceListenerAddress</a></code> | <code>*string</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerPort">SourceListenerPort</a></code> | <code>*f64</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.streamId">StreamId</a></code> | <code>*string</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.whitelistCidr">WhitelistCidr</a></code> | <code>*string</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `Decryption`<sup>Optional</sup> <a name="Decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.decryption"></a>

```go
Decryption MediaconnectFlowSourceDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

The type of decryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#decryption MediaconnectFlow#decryption}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}

---

##### `EntitlementArn`<sup>Optional</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.entitlementArn"></a>

```go
EntitlementArn *string
```

- *Type:* *string

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#entitlement_arn MediaconnectFlow#entitlement_arn}

---

##### `GatewayBridgeSource`<sup>Optional</sup> <a name="GatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.gatewayBridgeSource"></a>

```go
GatewayBridgeSource MediaconnectFlowSourceGatewayBridgeSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#gateway_bridge_source MediaconnectFlow#gateway_bridge_source}

---

##### `IngestPort`<sup>Optional</sup> <a name="IngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.ingestPort"></a>

```go
IngestPort *f64
```

- *Type:* *f64

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#ingest_port MediaconnectFlow#ingest_port}

---

##### `MaxBitrate`<sup>Optional</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxBitrate"></a>

```go
MaxBitrate *f64
```

- *Type:* *f64

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#max_bitrate MediaconnectFlow#max_bitrate}

---

##### `MaxLatency`<sup>Optional</sup> <a name="MaxLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxLatency"></a>

```go
MaxLatency *f64
```

- *Type:* *f64

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#max_latency MediaconnectFlow#max_latency}

---

##### `MaxSyncBuffer`<sup>Optional</sup> <a name="MaxSyncBuffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxSyncBuffer"></a>

```go
MaxSyncBuffer *f64
```

- *Type:* *f64

The size of the buffer (in milliseconds) to use to sync incoming source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#max_sync_buffer MediaconnectFlow#max_sync_buffer}

---

##### `MediaStreamSourceConfigurations`<sup>Optional</sup> <a name="MediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.mediaStreamSourceConfigurations"></a>

```go
MediaStreamSourceConfigurations interface{}
```

- *Type:* interface{}

The media stream that is associated with the source, and the parameters for that association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_source_configurations MediaconnectFlow#media_stream_source_configurations}

---

##### `MinLatency`<sup>Optional</sup> <a name="MinLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.minLatency"></a>

```go
MinLatency *f64
```

- *Type:* *f64

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#min_latency MediaconnectFlow#min_latency}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#protocol MediaconnectFlow#protocol}

---

##### `SenderControlPort`<sup>Optional</sup> <a name="SenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderControlPort"></a>

```go
SenderControlPort *f64
```

- *Type:* *f64

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#sender_control_port MediaconnectFlow#sender_control_port}

---

##### `SenderIpAddress`<sup>Optional</sup> <a name="SenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderIpAddress"></a>

```go
SenderIpAddress *string
```

- *Type:* *string

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#sender_ip_address MediaconnectFlow#sender_ip_address}

---

##### `SourceListenerAddress`<sup>Optional</sup> <a name="SourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerAddress"></a>

```go
SourceListenerAddress *string
```

- *Type:* *string

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_listener_address MediaconnectFlow#source_listener_address}

---

##### `SourceListenerPort`<sup>Optional</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerPort"></a>

```go
SourceListenerPort *f64
```

- *Type:* *f64

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_listener_port MediaconnectFlow#source_listener_port}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.streamId"></a>

```go
StreamId *string
```

- *Type:* *string

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#stream_id MediaconnectFlow#stream_id}

---

##### `VpcInterfaceName`<sup>Optional</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.vpcInterfaceName"></a>

```go
VpcInterfaceName *string
```

- *Type:* *string

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

##### `WhitelistCidr`<sup>Optional</sup> <a name="WhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.whitelistCidr"></a>

```go
WhitelistCidr *string
```

- *Type:* *string

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#whitelist_cidr MediaconnectFlow#whitelist_cidr}

---

### MediaconnectFlowSourceDecryption <a name="MediaconnectFlowSourceDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceDecryption {
	Algorithm: *string,
	ConstantInitializationVector: *string,
	DeviceId: *string,
	KeyType: *string,
	Region: *string,
	ResourceId: *string,
	RoleArn: *string,
	SecretArn: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.algorithm">Algorithm</a></code> | <code>*string</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.deviceId">DeviceId</a></code> | <code>*string</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.keyType">KeyType</a></code> | <code>*string</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.region">Region</a></code> | <code>*string</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.resourceId">ResourceId</a></code> | <code>*string</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.url">Url</a></code> | <code>*string</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#algorithm MediaconnectFlow#algorithm}

---

##### `ConstantInitializationVector`<sup>Optional</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.constantInitializationVector"></a>

```go
ConstantInitializationVector *string
```

- *Type:* *string

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#constant_initialization_vector MediaconnectFlow#constant_initialization_vector}

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.deviceId"></a>

```go
DeviceId *string
```

- *Type:* *string

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#device_id MediaconnectFlow#device_id}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#key_type MediaconnectFlow#key_type}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#region MediaconnectFlow#region}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#resource_id MediaconnectFlow#resource_id}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#secret_arn MediaconnectFlow#secret_arn}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#url MediaconnectFlow#url}

---

### MediaconnectFlowSourceFailoverConfig <a name="MediaconnectFlowSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceFailoverConfig {
	FailoverMode: *string,
	RecoveryWindow: *f64,
	SourcePriority: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.failoverMode">FailoverMode</a></code> | <code>*string</code> | The type of failover you choose for this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.recoveryWindow">RecoveryWindow</a></code> | <code>*f64</code> | Search window time to look for dash-7 packets. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.sourcePriority">SourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | The priority you want to assign to a source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}. |

---

##### `FailoverMode`<sup>Optional</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.failoverMode"></a>

```go
FailoverMode *string
```

- *Type:* *string

The type of failover you choose for this flow.

MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#failover_mode MediaconnectFlow#failover_mode}

---

##### `RecoveryWindow`<sup>Optional</sup> <a name="RecoveryWindow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.recoveryWindow"></a>

```go
RecoveryWindow *f64
```

- *Type:* *f64

Search window time to look for dash-7 packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#recovery_window MediaconnectFlow#recovery_window}

---

##### `SourcePriority`<sup>Optional</sup> <a name="SourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.sourcePriority"></a>

```go
SourcePriority MediaconnectFlowSourceFailoverConfigSourcePriority
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#source_priority MediaconnectFlow#source_priority}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}.

---

### MediaconnectFlowSourceFailoverConfigSourcePriority <a name="MediaconnectFlowSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceFailoverConfigSourcePriority {
	PrimarySource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.property.primarySource">PrimarySource</a></code> | <code>*string</code> | The name of the source you choose as the primary source for this flow. |

---

##### `PrimarySource`<sup>Optional</sup> <a name="PrimarySource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.property.primarySource"></a>

```go
PrimarySource *string
```

- *Type:* *string

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#primary_source MediaconnectFlow#primary_source}

---

### MediaconnectFlowSourceGatewayBridgeSource <a name="MediaconnectFlowSourceGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceGatewayBridgeSource {
	BridgeArn: *string,
	VpcInterfaceAttachment: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.bridgeArn">BridgeArn</a></code> | <code>*string</code> | The ARN of the bridge feeding this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.vpcInterfaceAttachment">VpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this bridge source. |

---

##### `BridgeArn`<sup>Optional</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.bridgeArn"></a>

```go
BridgeArn *string
```

- *Type:* *string

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#bridge_arn MediaconnectFlow#bridge_arn}

---

##### `VpcInterfaceAttachment`<sup>Optional</sup> <a name="VpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.vpcInterfaceAttachment"></a>

```go
VpcInterfaceAttachment MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interface_attachment MediaconnectFlow#vpc_interface_attachment}

---

### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment {
	VpcInterfaceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | The name of the VPC interface to use for this resource. |

---

##### `VpcInterfaceName`<sup>Optional</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```go
VpcInterfaceName *string
```

- *Type:* *string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurations <a name="MediaconnectFlowSourceMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceMediaStreamSourceConfigurations {
	EncodingName: *string,
	InputConfigurations: interface{},
	MediaStreamName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.encodingName">EncodingName</a></code> | <code>*string</code> | The format that was used to encode the data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.inputConfigurations">InputConfigurations</a></code> | <code>interface{}</code> | The media streams that you want to associate with the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.mediaStreamName">MediaStreamName</a></code> | <code>*string</code> | A name that helps you distinguish one media stream from another. |

---

##### `EncodingName`<sup>Optional</sup> <a name="EncodingName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.encodingName"></a>

```go
EncodingName *string
```

- *Type:* *string

The format that was used to encode the data.

For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#encoding_name MediaconnectFlow#encoding_name}

---

##### `InputConfigurations`<sup>Optional</sup> <a name="InputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.inputConfigurations"></a>

```go
InputConfigurations interface{}
```

- *Type:* interface{}

The media streams that you want to associate with the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#input_configurations MediaconnectFlow#input_configurations}

---

##### `MediaStreamName`<sup>Optional</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.mediaStreamName"></a>

```go
MediaStreamName *string
```

- *Type:* *string

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations {
	InputPort: *f64,
	Interface: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.inputPort">InputPort</a></code> | <code>*f64</code> | The port that the flow listens on for an incoming media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.interface">Interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | The VPC interface where the media stream comes in from. |

---

##### `InputPort`<sup>Optional</sup> <a name="InputPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.inputPort"></a>

```go
InputPort *f64
```

- *Type:* *f64

The port that the flow listens on for an incoming media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#input_port MediaconnectFlow#input_port}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.interface"></a>

```go
Interface MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

The VPC interface where the media stream comes in from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#interface MediaconnectFlow#interface}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.property.name">Name</a></code> | <code>*string</code> | The name of the VPC interface that you want to use for the media stream associated with the output. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the VPC interface that you want to use for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

### MediaconnectFlowSourceMonitoringConfig <a name="MediaconnectFlowSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceMonitoringConfig {
	AudioMonitoringSettings: interface{},
	ContentQualityAnalysisState: *string,
	ThumbnailState: *string,
	VideoMonitoringSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.audioMonitoringSettings">AudioMonitoringSettings</a></code> | <code>interface{}</code> | Contains the settings for audio stream metrics monitoring. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.contentQualityAnalysisState">ContentQualityAnalysisState</a></code> | <code>*string</code> | Indicates whether content quality analysis is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.thumbnailState">ThumbnailState</a></code> | <code>*string</code> | The state of thumbnail monitoring. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.videoMonitoringSettings">VideoMonitoringSettings</a></code> | <code>interface{}</code> | Contains the settings for video stream metrics monitoring. |

---

##### `AudioMonitoringSettings`<sup>Optional</sup> <a name="AudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.audioMonitoringSettings"></a>

```go
AudioMonitoringSettings interface{}
```

- *Type:* interface{}

Contains the settings for audio stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#audio_monitoring_settings MediaconnectFlow#audio_monitoring_settings}

---

##### `ContentQualityAnalysisState`<sup>Optional</sup> <a name="ContentQualityAnalysisState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.contentQualityAnalysisState"></a>

```go
ContentQualityAnalysisState *string
```

- *Type:* *string

Indicates whether content quality analysis is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#content_quality_analysis_state MediaconnectFlow#content_quality_analysis_state}

---

##### `ThumbnailState`<sup>Optional</sup> <a name="ThumbnailState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.thumbnailState"></a>

```go
ThumbnailState *string
```

- *Type:* *string

The state of thumbnail monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#thumbnail_state MediaconnectFlow#thumbnail_state}

---

##### `VideoMonitoringSettings`<sup>Optional</sup> <a name="VideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.videoMonitoringSettings"></a>

```go
VideoMonitoringSettings interface{}
```

- *Type:* interface{}

Contains the settings for video stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#video_monitoring_settings MediaconnectFlow#video_monitoring_settings}

---

### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings {
	SilentAudio: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.property.silentAudio">SilentAudio</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | Configures settings for the SilentAudio metric. |

---

##### `SilentAudio`<sup>Optional</sup> <a name="SilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.property.silentAudio"></a>

```go
SilentAudio MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

Configures settings for the SilentAudio metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#silent_audio MediaconnectFlow#silent_audio}

---

### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio {
	State: *string,
	ThresholdSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.state">State</a></code> | <code>*string</code> | Indicates whether the SilentAudio metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>*f64</code> | Specifies the number of consecutive seconds of silence that triggers an event or alert. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.state"></a>

```go
State *string
```

- *Type:* *string

Indicates whether the SilentAudio metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `ThresholdSeconds`<sup>Optional</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.thresholdSeconds"></a>

```go
ThresholdSeconds *f64
```

- *Type:* *f64

Specifies the number of consecutive seconds of silence that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings {
	BlackFrames: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames,
	FrozenFrames: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.blackFrames">BlackFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | Configures settings for the BlackFrames metric. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.frozenFrames">FrozenFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | Configures settings for the FrozenFrames metric. |

---

##### `BlackFrames`<sup>Optional</sup> <a name="BlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.blackFrames"></a>

```go
BlackFrames MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

Configures settings for the BlackFrames metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#black_frames MediaconnectFlow#black_frames}

---

##### `FrozenFrames`<sup>Optional</sup> <a name="FrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.frozenFrames"></a>

```go
FrozenFrames MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

Configures settings for the FrozenFrames metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#frozen_frames MediaconnectFlow#frozen_frames}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames {
	State: *string,
	ThresholdSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.state">State</a></code> | <code>*string</code> | Indicates whether the BlackFrames metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>*f64</code> | Specifies the number of consecutive seconds of black frames that triggers an event or alert. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.state"></a>

```go
State *string
```

- *Type:* *string

Indicates whether the BlackFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `ThresholdSeconds`<sup>Optional</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.thresholdSeconds"></a>

```go
ThresholdSeconds *f64
```

- *Type:* *f64

Specifies the number of consecutive seconds of black frames that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames {
	State: *string,
	ThresholdSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.state">State</a></code> | <code>*string</code> | Indicates whether the FrozenFrames metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>*f64</code> | Specifies the number of consecutive seconds of a static image that triggers an event or alert. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.state"></a>

```go
State *string
```

- *Type:* *string

Indicates whether the FrozenFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `ThresholdSeconds`<sup>Optional</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.thresholdSeconds"></a>

```go
ThresholdSeconds *f64
```

- *Type:* *f64

Specifies the number of consecutive seconds of a static image that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowVpcInterfaces <a name="MediaconnectFlowVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

&mediaconnectflow.MediaconnectFlowVpcInterfaces {
	Name: *string,
	NetworkInterfaceIds: *[]*string,
	NetworkInterfaceType: *string,
	RoleArn: *string,
	SecurityGroupIds: *[]*string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.name">Name</a></code> | <code>*string</code> | Immutable and has to be a unique against other VpcInterfaces in this Flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | IDs of the network interfaces created in customer's account by MediaConnect. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceType">NetworkInterfaceType</a></code> | <code>*string</code> | The type of network adapter that you want MediaConnect to use on this interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.roleArn">RoleArn</a></code> | <code>*string</code> | Role Arn MediaConnect can assume to create ENIs in customer's account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Security Group IDs to be used on ENI. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.subnetId">SubnetId</a></code> | <code>*string</code> | Subnet must be in the AZ of the Flow. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.name"></a>

```go
Name *string
```

- *Type:* *string

Immutable and has to be a unique against other VpcInterfaces in this Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `NetworkInterfaceIds`<sup>Optional</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceIds"></a>

```go
NetworkInterfaceIds *[]*string
```

- *Type:* *[]*string

IDs of the network interfaces created in customer's account by MediaConnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#network_interface_ids MediaconnectFlow#network_interface_ids}

---

##### `NetworkInterfaceType`<sup>Optional</sup> <a name="NetworkInterfaceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceType"></a>

```go
NetworkInterfaceType *string
```

- *Type:* *string

The type of network adapter that you want MediaConnect to use on this interface.

If you don't set this value, it defaults to ENA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#network_interface_type MediaconnectFlow#network_interface_type}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Role Arn MediaConnect can assume to create ENIs in customer's account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Security Group IDs to be used on ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#security_group_ids MediaconnectFlow#security_group_ids}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Subnet must be in the AZ of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow#subnet_id MediaconnectFlow#subnet_id}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowMaintenanceOutputReference <a name="MediaconnectFlowMaintenanceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceDay">ResetMaintenanceDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceStartHour">ResetMaintenanceStartHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaintenanceDay` <a name="ResetMaintenanceDay" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceDay"></a>

```go
func ResetMaintenanceDay()
```

##### `ResetMaintenanceStartHour` <a name="ResetMaintenanceStartHour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceStartHour"></a>

```go
func ResetMaintenanceStartHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDayInput">MaintenanceDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHourInput">MaintenanceStartHourInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDay">MaintenanceDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour">MaintenanceStartHour</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaintenanceDayInput`<sup>Optional</sup> <a name="MaintenanceDayInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDayInput"></a>

```go
func MaintenanceDayInput() *string
```

- *Type:* *string

---

##### `MaintenanceStartHourInput`<sup>Optional</sup> <a name="MaintenanceStartHourInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHourInput"></a>

```go
func MaintenanceStartHourInput() *string
```

- *Type:* *string

---

##### `MaintenanceDay`<sup>Required</sup> <a name="MaintenanceDay" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDay"></a>

```go
func MaintenanceDay() *string
```

- *Type:* *string

---

##### `MaintenanceStartHour`<sup>Required</sup> <a name="MaintenanceStartHour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour"></a>

```go
func MaintenanceStartHour() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowMediaStreamsAttributesFmtpOutputReference <a name="MediaconnectFlowMediaStreamsAttributesFmtpOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowMediaStreamsAttributesFmtpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowMediaStreamsAttributesFmtpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetChannelOrder">ResetChannelOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetColorimetry">ResetColorimetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetExactFramerate">ResetExactFramerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetPar">ResetPar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetScanMode">ResetScanMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetTcs">ResetTcs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelOrder` <a name="ResetChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetChannelOrder"></a>

```go
func ResetChannelOrder()
```

##### `ResetColorimetry` <a name="ResetColorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetColorimetry"></a>

```go
func ResetColorimetry()
```

##### `ResetExactFramerate` <a name="ResetExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetExactFramerate"></a>

```go
func ResetExactFramerate()
```

##### `ResetPar` <a name="ResetPar" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetPar"></a>

```go
func ResetPar()
```

##### `ResetRange` <a name="ResetRange" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetRange"></a>

```go
func ResetRange()
```

##### `ResetScanMode` <a name="ResetScanMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetScanMode"></a>

```go
func ResetScanMode()
```

##### `ResetTcs` <a name="ResetTcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetTcs"></a>

```go
func ResetTcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrderInput">ChannelOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetryInput">ColorimetryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerateInput">ExactFramerateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.parInput">ParInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.rangeInput">RangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanModeInput">ScanModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcsInput">TcsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder">ChannelOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry">Colorimetry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate">ExactFramerate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par">Par</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range">Range</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode">ScanMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs">Tcs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelOrderInput`<sup>Optional</sup> <a name="ChannelOrderInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrderInput"></a>

```go
func ChannelOrderInput() *string
```

- *Type:* *string

---

##### `ColorimetryInput`<sup>Optional</sup> <a name="ColorimetryInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetryInput"></a>

```go
func ColorimetryInput() *string
```

- *Type:* *string

---

##### `ExactFramerateInput`<sup>Optional</sup> <a name="ExactFramerateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerateInput"></a>

```go
func ExactFramerateInput() *string
```

- *Type:* *string

---

##### `ParInput`<sup>Optional</sup> <a name="ParInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.parInput"></a>

```go
func ParInput() *string
```

- *Type:* *string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.rangeInput"></a>

```go
func RangeInput() *string
```

- *Type:* *string

---

##### `ScanModeInput`<sup>Optional</sup> <a name="ScanModeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanModeInput"></a>

```go
func ScanModeInput() *string
```

- *Type:* *string

---

##### `TcsInput`<sup>Optional</sup> <a name="TcsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcsInput"></a>

```go
func TcsInput() *string
```

- *Type:* *string

---

##### `ChannelOrder`<sup>Required</sup> <a name="ChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder"></a>

```go
func ChannelOrder() *string
```

- *Type:* *string

---

##### `Colorimetry`<sup>Required</sup> <a name="Colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry"></a>

```go
func Colorimetry() *string
```

- *Type:* *string

---

##### `ExactFramerate`<sup>Required</sup> <a name="ExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate"></a>

```go
func ExactFramerate() *string
```

- *Type:* *string

---

##### `Par`<sup>Required</sup> <a name="Par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par"></a>

```go
func Par() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range"></a>

```go
func Range() *string
```

- *Type:* *string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode"></a>

```go
func ScanMode() *string
```

- *Type:* *string

---

##### `Tcs`<sup>Required</sup> <a name="Tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs"></a>

```go
func Tcs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowMediaStreamsAttributesOutputReference <a name="MediaconnectFlowMediaStreamsAttributesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowMediaStreamsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowMediaStreamsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp">PutFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetFmtp">ResetFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetLang">ResetLang</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFmtp` <a name="PutFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp"></a>

```go
func PutFmtp(value MediaconnectFlowMediaStreamsAttributesFmtp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

---

##### `ResetFmtp` <a name="ResetFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetFmtp"></a>

```go
func ResetFmtp()
```

##### `ResetLang` <a name="ResetLang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetLang"></a>

```go
func ResetLang()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp">Fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference">MediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtpInput">FmtpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.langInput">LangInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.lang">Lang</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fmtp`<sup>Required</sup> <a name="Fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp"></a>

```go
func Fmtp() MediaconnectFlowMediaStreamsAttributesFmtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference">MediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a>

---

##### `FmtpInput`<sup>Optional</sup> <a name="FmtpInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtpInput"></a>

```go
func FmtpInput() interface{}
```

- *Type:* interface{}

---

##### `LangInput`<sup>Optional</sup> <a name="LangInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.langInput"></a>

```go
func LangInput() *string
```

- *Type:* *string

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.lang"></a>

```go
func Lang() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowMediaStreamsList <a name="MediaconnectFlowMediaStreamsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowMediaStreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectFlowMediaStreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get"></a>

```go
func Get(index *f64) MediaconnectFlowMediaStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowMediaStreamsOutputReference <a name="MediaconnectFlowMediaStreamsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowMediaStreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectFlowMediaStreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetClockRate">ResetClockRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetFmt">ResetFmt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamId">ResetMediaStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamName">ResetMediaStreamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamType">ResetMediaStreamType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetVideoFormat">ResetVideoFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes"></a>

```go
func PutAttributes(value MediaconnectFlowMediaStreamsAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetClockRate` <a name="ResetClockRate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetClockRate"></a>

```go
func ResetClockRate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFmt` <a name="ResetFmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetFmt"></a>

```go
func ResetFmt()
```

##### `ResetMediaStreamId` <a name="ResetMediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamId"></a>

```go
func ResetMediaStreamId()
```

##### `ResetMediaStreamName` <a name="ResetMediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamName"></a>

```go
func ResetMediaStreamName()
```

##### `ResetMediaStreamType` <a name="ResetMediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamType"></a>

```go
func ResetMediaStreamType()
```

##### `ResetVideoFormat` <a name="ResetVideoFormat" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetVideoFormat"></a>

```go
func ResetVideoFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference">MediaconnectFlowMediaStreamsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRateInput">ClockRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmtInput">FmtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamIdInput">MediaStreamIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamNameInput">MediaStreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamTypeInput">MediaStreamTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormatInput">VideoFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRate">ClockRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmt">Fmt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId">MediaStreamId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName">MediaStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType">MediaStreamType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormat">VideoFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributes"></a>

```go
func Attributes() MediaconnectFlowMediaStreamsAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference">MediaconnectFlowMediaStreamsAttributesOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `ClockRateInput`<sup>Optional</sup> <a name="ClockRateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRateInput"></a>

```go
func ClockRateInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FmtInput`<sup>Optional</sup> <a name="FmtInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmtInput"></a>

```go
func FmtInput() *f64
```

- *Type:* *f64

---

##### `MediaStreamIdInput`<sup>Optional</sup> <a name="MediaStreamIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamIdInput"></a>

```go
func MediaStreamIdInput() *f64
```

- *Type:* *f64

---

##### `MediaStreamNameInput`<sup>Optional</sup> <a name="MediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamNameInput"></a>

```go
func MediaStreamNameInput() *string
```

- *Type:* *string

---

##### `MediaStreamTypeInput`<sup>Optional</sup> <a name="MediaStreamTypeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamTypeInput"></a>

```go
func MediaStreamTypeInput() *string
```

- *Type:* *string

---

##### `VideoFormatInput`<sup>Optional</sup> <a name="VideoFormatInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormatInput"></a>

```go
func VideoFormatInput() *string
```

- *Type:* *string

---

##### `ClockRate`<sup>Required</sup> <a name="ClockRate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRate"></a>

```go
func ClockRate() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Fmt`<sup>Required</sup> <a name="Fmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmt"></a>

```go
func Fmt() *f64
```

- *Type:* *f64

---

##### `MediaStreamId`<sup>Required</sup> <a name="MediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId"></a>

```go
func MediaStreamId() *f64
```

- *Type:* *f64

---

##### `MediaStreamName`<sup>Required</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName"></a>

```go
func MediaStreamName() *string
```

- *Type:* *string

---

##### `MediaStreamType`<sup>Required</sup> <a name="MediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType"></a>

```go
func MediaStreamType() *string
```

- *Type:* *string

---

##### `VideoFormat`<sup>Required</sup> <a name="VideoFormat" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormat"></a>

```go
func VideoFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceDecryptionOutputReference <a name="MediaconnectFlowSourceDecryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceDecryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceDecryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetConstantInitializationVector">ResetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetConstantInitializationVector` <a name="ResetConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetConstantInitializationVector"></a>

```go
func ResetConstantInitializationVector()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetDeviceId"></a>

```go
func ResetDeviceId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVectorInput">ConstantInitializationVectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceIdInput">DeviceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceId">DeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `ConstantInitializationVectorInput`<sup>Optional</sup> <a name="ConstantInitializationVectorInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVectorInput"></a>

```go
func ConstantInitializationVectorInput() *string
```

- *Type:* *string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceIdInput"></a>

```go
func DeviceIdInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector"></a>

```go
func ConstantInitializationVector() *string
```

- *Type:* *string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceId"></a>

```go
func DeviceId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceFailoverConfigOutputReference <a name="MediaconnectFlowSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceFailoverConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceFailoverConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority">PutSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetFailoverMode">ResetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetRecoveryWindow">ResetRecoveryWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetSourcePriority">ResetSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePriority` <a name="PutSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority"></a>

```go
func PutSourcePriority(value MediaconnectFlowSourceFailoverConfigSourcePriority)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

---

##### `ResetFailoverMode` <a name="ResetFailoverMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetFailoverMode"></a>

```go
func ResetFailoverMode()
```

##### `ResetRecoveryWindow` <a name="ResetRecoveryWindow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetRecoveryWindow"></a>

```go
func ResetRecoveryWindow()
```

##### `ResetSourcePriority` <a name="ResetSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetSourcePriority"></a>

```go
func ResetSourcePriority()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority">SourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverModeInput">FailoverModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindowInput">RecoveryWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriorityInput">SourcePriorityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode">FailoverMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow">RecoveryWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourcePriority`<sup>Required</sup> <a name="SourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```go
func SourcePriority() MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `FailoverModeInput`<sup>Optional</sup> <a name="FailoverModeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverModeInput"></a>

```go
func FailoverModeInput() *string
```

- *Type:* *string

---

##### `RecoveryWindowInput`<sup>Optional</sup> <a name="RecoveryWindowInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindowInput"></a>

```go
func RecoveryWindowInput() *f64
```

- *Type:* *f64

---

##### `SourcePriorityInput`<sup>Optional</sup> <a name="SourcePriorityInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriorityInput"></a>

```go
func SourcePriorityInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `FailoverMode`<sup>Required</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode"></a>

```go
func FailoverMode() *string
```

- *Type:* *string

---

##### `RecoveryWindow`<sup>Required</sup> <a name="RecoveryWindow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow"></a>

```go
func RecoveryWindow() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference <a name="MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource">ResetPrimarySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimarySource` <a name="ResetPrimarySource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource"></a>

```go
func ResetPrimarySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput">PrimarySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">PrimarySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimarySourceInput`<sup>Optional</sup> <a name="PrimarySourceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput"></a>

```go
func PrimarySourceInput() *string
```

- *Type:* *string

---

##### `PrimarySource`<sup>Required</sup> <a name="PrimarySource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```go
func PrimarySource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceGatewayBridgeSourceOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceGatewayBridgeSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceGatewayBridgeSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment">PutVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetBridgeArn">ResetBridgeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetVpcInterfaceAttachment">ResetVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcInterfaceAttachment` <a name="PutVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment"></a>

```go
func PutVpcInterfaceAttachment(value MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---

##### `ResetBridgeArn` <a name="ResetBridgeArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetBridgeArn"></a>

```go
func ResetBridgeArn()
```

##### `ResetVpcInterfaceAttachment` <a name="ResetVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetVpcInterfaceAttachment"></a>

```go
func ResetVpcInterfaceAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment">VpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArnInput">BridgeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachmentInput">VpcInterfaceAttachmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn">BridgeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcInterfaceAttachment`<sup>Required</sup> <a name="VpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment"></a>

```go
func VpcInterfaceAttachment() MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a>

---

##### `BridgeArnInput`<sup>Optional</sup> <a name="BridgeArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArnInput"></a>

```go
func BridgeArnInput() *string
```

- *Type:* *string

---

##### `VpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="VpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachmentInput"></a>

```go
func VpcInterfaceAttachmentInput() interface{}
```

- *Type:* interface{}

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn"></a>

```go
func BridgeArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">ResetVpcInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcInterfaceName` <a name="ResetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```go
func ResetVpcInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">VpcInterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcInterfaceNameInput`<sup>Optional</sup> <a name="VpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```go
func VpcInterfaceNameInput() *string
```

- *Type:* *string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```go
func VpcInterfaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get"></a>

```go
func Get(index *f64) MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface">PutInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInputPort">ResetInputPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInterface` <a name="PutInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface"></a>

```go
func PutInterface(value MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---

##### `ResetInputPort` <a name="ResetInputPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInputPort"></a>

```go
func ResetInputPort()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInterface"></a>

```go
func ResetInterface()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface">Interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPortInput">InputPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort">InputPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface"></a>

```go
func Interface() MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a>

---

##### `InputPortInput`<sup>Optional</sup> <a name="InputPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPortInput"></a>

```go
func InputPortInput() *f64
```

- *Type:* *f64

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interfaceInput"></a>

```go
func InterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `InputPort`<sup>Required</sup> <a name="InputPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort"></a>

```go
func InputPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsList <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMediaStreamSourceConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectFlowSourceMediaStreamSourceConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get"></a>

```go
func Get(index *f64) MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations">PutInputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetEncodingName">ResetEncodingName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetInputConfigurations">ResetInputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetMediaStreamName">ResetMediaStreamName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputConfigurations` <a name="PutInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations"></a>

```go
func PutInputConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEncodingName` <a name="ResetEncodingName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetEncodingName"></a>

```go
func ResetEncodingName()
```

##### `ResetInputConfigurations` <a name="ResetInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetInputConfigurations"></a>

```go
func ResetInputConfigurations()
```

##### `ResetMediaStreamName` <a name="ResetMediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetMediaStreamName"></a>

```go
func ResetMediaStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations">InputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingNameInput">EncodingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurationsInput">InputConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamNameInput">MediaStreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName">EncodingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName">MediaStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputConfigurations`<sup>Required</sup> <a name="InputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations"></a>

```go
func InputConfigurations() MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a>

---

##### `EncodingNameInput`<sup>Optional</sup> <a name="EncodingNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingNameInput"></a>

```go
func EncodingNameInput() *string
```

- *Type:* *string

---

##### `InputConfigurationsInput`<sup>Optional</sup> <a name="InputConfigurationsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurationsInput"></a>

```go
func InputConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `MediaStreamNameInput`<sup>Optional</sup> <a name="MediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamNameInput"></a>

```go
func MediaStreamNameInput() *string
```

- *Type:* *string

---

##### `EncodingName`<sup>Required</sup> <a name="EncodingName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName"></a>

```go
func EncodingName() *string
```

- *Type:* *string

---

##### `MediaStreamName`<sup>Required</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName"></a>

```go
func MediaStreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get"></a>

```go
func Get(index *f64) MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio">PutSilentAudio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resetSilentAudio">ResetSilentAudio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSilentAudio` <a name="PutSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio"></a>

```go
func PutSilentAudio(value MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---

##### `ResetSilentAudio` <a name="ResetSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resetSilentAudio"></a>

```go
func ResetSilentAudio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio">SilentAudio</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudioInput">SilentAudioInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SilentAudio`<sup>Required</sup> <a name="SilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio"></a>

```go
func SilentAudio() MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a>

---

##### `SilentAudioInput`<sup>Optional</sup> <a name="SilentAudioInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudioInput"></a>

```go
func SilentAudioInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetThresholdSeconds">ResetThresholdSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetThresholdSeconds` <a name="ResetThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetThresholdSeconds"></a>

```go
func ResetThresholdSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSecondsInput">ThresholdSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ThresholdSecondsInput`<sup>Optional</sup> <a name="ThresholdSecondsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSecondsInput"></a>

```go
func ThresholdSecondsInput() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds"></a>

```go
func ThresholdSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMonitoringConfigOutputReference <a name="MediaconnectFlowSourceMonitoringConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMonitoringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceMonitoringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings">PutAudioMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings">PutVideoMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetAudioMonitoringSettings">ResetAudioMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetContentQualityAnalysisState">ResetContentQualityAnalysisState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetThumbnailState">ResetThumbnailState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetVideoMonitoringSettings">ResetVideoMonitoringSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioMonitoringSettings` <a name="PutAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings"></a>

```go
func PutAudioMonitoringSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVideoMonitoringSettings` <a name="PutVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings"></a>

```go
func PutVideoMonitoringSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAudioMonitoringSettings` <a name="ResetAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetAudioMonitoringSettings"></a>

```go
func ResetAudioMonitoringSettings()
```

##### `ResetContentQualityAnalysisState` <a name="ResetContentQualityAnalysisState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetContentQualityAnalysisState"></a>

```go
func ResetContentQualityAnalysisState()
```

##### `ResetThumbnailState` <a name="ResetThumbnailState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetThumbnailState"></a>

```go
func ResetThumbnailState()
```

##### `ResetVideoMonitoringSettings` <a name="ResetVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetVideoMonitoringSettings"></a>

```go
func ResetVideoMonitoringSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings">AudioMonitoringSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings">VideoMonitoringSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettingsInput">AudioMonitoringSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisStateInput">ContentQualityAnalysisStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailStateInput">ThumbnailStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettingsInput">VideoMonitoringSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState">ContentQualityAnalysisState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState">ThumbnailState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioMonitoringSettings`<sup>Required</sup> <a name="AudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings"></a>

```go
func AudioMonitoringSettings() MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a>

---

##### `VideoMonitoringSettings`<sup>Required</sup> <a name="VideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings"></a>

```go
func VideoMonitoringSettings() MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a>

---

##### `AudioMonitoringSettingsInput`<sup>Optional</sup> <a name="AudioMonitoringSettingsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettingsInput"></a>

```go
func AudioMonitoringSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ContentQualityAnalysisStateInput`<sup>Optional</sup> <a name="ContentQualityAnalysisStateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisStateInput"></a>

```go
func ContentQualityAnalysisStateInput() *string
```

- *Type:* *string

---

##### `ThumbnailStateInput`<sup>Optional</sup> <a name="ThumbnailStateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailStateInput"></a>

```go
func ThumbnailStateInput() *string
```

- *Type:* *string

---

##### `VideoMonitoringSettingsInput`<sup>Optional</sup> <a name="VideoMonitoringSettingsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettingsInput"></a>

```go
func VideoMonitoringSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ContentQualityAnalysisState`<sup>Required</sup> <a name="ContentQualityAnalysisState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState"></a>

```go
func ContentQualityAnalysisState() *string
```

- *Type:* *string

---

##### `ThumbnailState`<sup>Required</sup> <a name="ThumbnailState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState"></a>

```go
func ThumbnailState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetThresholdSeconds">ResetThresholdSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetThresholdSeconds` <a name="ResetThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetThresholdSeconds"></a>

```go
func ResetThresholdSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSecondsInput">ThresholdSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ThresholdSecondsInput`<sup>Optional</sup> <a name="ThresholdSecondsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSecondsInput"></a>

```go
func ThresholdSecondsInput() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds"></a>

```go
func ThresholdSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetThresholdSeconds">ResetThresholdSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetThresholdSeconds` <a name="ResetThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetThresholdSeconds"></a>

```go
func ResetThresholdSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSecondsInput">ThresholdSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ThresholdSecondsInput`<sup>Optional</sup> <a name="ThresholdSecondsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSecondsInput"></a>

```go
func ThresholdSecondsInput() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds"></a>

```go
func ThresholdSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get"></a>

```go
func Get(index *f64) MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames">PutBlackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames">PutFrozenFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetBlackFrames">ResetBlackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetFrozenFrames">ResetFrozenFrames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlackFrames` <a name="PutBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames"></a>

```go
func PutBlackFrames(value MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---

##### `PutFrozenFrames` <a name="PutFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames"></a>

```go
func PutFrozenFrames(value MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---

##### `ResetBlackFrames` <a name="ResetBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetBlackFrames"></a>

```go
func ResetBlackFrames()
```

##### `ResetFrozenFrames` <a name="ResetFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetFrozenFrames"></a>

```go
func ResetFrozenFrames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames">BlackFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames">FrozenFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFramesInput">BlackFramesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFramesInput">FrozenFramesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlackFrames`<sup>Required</sup> <a name="BlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames"></a>

```go
func BlackFrames() MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a>

---

##### `FrozenFrames`<sup>Required</sup> <a name="FrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames"></a>

```go
func FrozenFrames() MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a>

---

##### `BlackFramesInput`<sup>Optional</sup> <a name="BlackFramesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFramesInput"></a>

```go
func BlackFramesInput() interface{}
```

- *Type:* interface{}

---

##### `FrozenFramesInput`<sup>Optional</sup> <a name="FrozenFramesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFramesInput"></a>

```go
func FrozenFramesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowSourceOutputReference <a name="MediaconnectFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption">PutDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource">PutGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations">PutMediaStreamSourceConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDecryption">ResetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetEntitlementArn">ResetEntitlementArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetGatewayBridgeSource">ResetGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetIngestPort">ResetIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxBitrate">ResetMaxBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxLatency">ResetMaxLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxSyncBuffer">ResetMaxSyncBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMediaStreamSourceConfigurations">ResetMediaStreamSourceConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMinLatency">ResetMinLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderControlPort">ResetSenderControlPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderIpAddress">ResetSenderIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerAddress">ResetSourceListenerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerPort">ResetSourceListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetVpcInterfaceName">ResetVpcInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetWhitelistCidr">ResetWhitelistCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDecryption` <a name="PutDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption"></a>

```go
func PutDecryption(value MediaconnectFlowSourceDecryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

---

##### `PutGatewayBridgeSource` <a name="PutGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource"></a>

```go
func PutGatewayBridgeSource(value MediaconnectFlowSourceGatewayBridgeSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

---

##### `PutMediaStreamSourceConfigurations` <a name="PutMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations"></a>

```go
func PutMediaStreamSourceConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDecryption` <a name="ResetDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDecryption"></a>

```go
func ResetDecryption()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEntitlementArn` <a name="ResetEntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetEntitlementArn"></a>

```go
func ResetEntitlementArn()
```

##### `ResetGatewayBridgeSource` <a name="ResetGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetGatewayBridgeSource"></a>

```go
func ResetGatewayBridgeSource()
```

##### `ResetIngestPort` <a name="ResetIngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetIngestPort"></a>

```go
func ResetIngestPort()
```

##### `ResetMaxBitrate` <a name="ResetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxBitrate"></a>

```go
func ResetMaxBitrate()
```

##### `ResetMaxLatency` <a name="ResetMaxLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxLatency"></a>

```go
func ResetMaxLatency()
```

##### `ResetMaxSyncBuffer` <a name="ResetMaxSyncBuffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxSyncBuffer"></a>

```go
func ResetMaxSyncBuffer()
```

##### `ResetMediaStreamSourceConfigurations` <a name="ResetMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMediaStreamSourceConfigurations"></a>

```go
func ResetMediaStreamSourceConfigurations()
```

##### `ResetMinLatency` <a name="ResetMinLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMinLatency"></a>

```go
func ResetMinLatency()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSenderControlPort` <a name="ResetSenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderControlPort"></a>

```go
func ResetSenderControlPort()
```

##### `ResetSenderIpAddress` <a name="ResetSenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderIpAddress"></a>

```go
func ResetSenderIpAddress()
```

##### `ResetSourceListenerAddress` <a name="ResetSourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerAddress"></a>

```go
func ResetSourceListenerAddress()
```

##### `ResetSourceListenerPort` <a name="ResetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerPort"></a>

```go
func ResetSourceListenerPort()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetStreamId"></a>

```go
func ResetStreamId()
```

##### `ResetVpcInterfaceName` <a name="ResetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetVpcInterfaceName"></a>

```go
func ResetVpcInterfaceName()
```

##### `ResetWhitelistCidr` <a name="ResetWhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetWhitelistCidr"></a>

```go
func ResetWhitelistCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference">MediaconnectFlowSourceDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSource">GatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference">MediaconnectFlowSourceGatewayBridgeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestIp">IngestIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations">MediaStreamSourceConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceIngestPort">SourceIngestPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryptionInput">DecryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArnInput">EntitlementArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSourceInput">GatewayBridgeSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPortInput">IngestPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrateInput">MaxBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatencyInput">MaxLatencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBufferInput">MaxSyncBufferInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurationsInput">MediaStreamSourceConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatencyInput">MinLatencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPortInput">SenderControlPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddressInput">SenderIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddressInput">SourceListenerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPortInput">SourceListenerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceNameInput">VpcInterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidrInput">WhitelistCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArn">EntitlementArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPort">IngestPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrate">MaxBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatency">MaxLatency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBuffer">MaxSyncBuffer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatency">MinLatency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPort">SenderControlPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddress">SenderIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddress">SourceListenerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPort">SourceListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidr">WhitelistCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Decryption`<sup>Required</sup> <a name="Decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryption"></a>

```go
func Decryption() MediaconnectFlowSourceDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference">MediaconnectFlowSourceDecryptionOutputReference</a>

---

##### `GatewayBridgeSource`<sup>Required</sup> <a name="GatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSource"></a>

```go
func GatewayBridgeSource() MediaconnectFlowSourceGatewayBridgeSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference">MediaconnectFlowSourceGatewayBridgeSourceOutputReference</a>

---

##### `IngestIp`<sup>Required</sup> <a name="IngestIp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestIp"></a>

```go
func IngestIp() *string
```

- *Type:* *string

---

##### `MediaStreamSourceConfigurations`<sup>Required</sup> <a name="MediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations"></a>

```go
func MediaStreamSourceConfigurations() MediaconnectFlowSourceMediaStreamSourceConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsList</a>

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `SourceIngestPort`<sup>Required</sup> <a name="SourceIngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceIngestPort"></a>

```go
func SourceIngestPort() *string
```

- *Type:* *string

---

##### `DecryptionInput`<sup>Optional</sup> <a name="DecryptionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryptionInput"></a>

```go
func DecryptionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntitlementArnInput`<sup>Optional</sup> <a name="EntitlementArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArnInput"></a>

```go
func EntitlementArnInput() *string
```

- *Type:* *string

---

##### `GatewayBridgeSourceInput`<sup>Optional</sup> <a name="GatewayBridgeSourceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSourceInput"></a>

```go
func GatewayBridgeSourceInput() interface{}
```

- *Type:* interface{}

---

##### `IngestPortInput`<sup>Optional</sup> <a name="IngestPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPortInput"></a>

```go
func IngestPortInput() *f64
```

- *Type:* *f64

---

##### `MaxBitrateInput`<sup>Optional</sup> <a name="MaxBitrateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrateInput"></a>

```go
func MaxBitrateInput() *f64
```

- *Type:* *f64

---

##### `MaxLatencyInput`<sup>Optional</sup> <a name="MaxLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatencyInput"></a>

```go
func MaxLatencyInput() *f64
```

- *Type:* *f64

---

##### `MaxSyncBufferInput`<sup>Optional</sup> <a name="MaxSyncBufferInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBufferInput"></a>

```go
func MaxSyncBufferInput() *f64
```

- *Type:* *f64

---

##### `MediaStreamSourceConfigurationsInput`<sup>Optional</sup> <a name="MediaStreamSourceConfigurationsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurationsInput"></a>

```go
func MediaStreamSourceConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `MinLatencyInput`<sup>Optional</sup> <a name="MinLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatencyInput"></a>

```go
func MinLatencyInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SenderControlPortInput`<sup>Optional</sup> <a name="SenderControlPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPortInput"></a>

```go
func SenderControlPortInput() *f64
```

- *Type:* *f64

---

##### `SenderIpAddressInput`<sup>Optional</sup> <a name="SenderIpAddressInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddressInput"></a>

```go
func SenderIpAddressInput() *string
```

- *Type:* *string

---

##### `SourceListenerAddressInput`<sup>Optional</sup> <a name="SourceListenerAddressInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddressInput"></a>

```go
func SourceListenerAddressInput() *string
```

- *Type:* *string

---

##### `SourceListenerPortInput`<sup>Optional</sup> <a name="SourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPortInput"></a>

```go
func SourceListenerPortInput() *f64
```

- *Type:* *f64

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamIdInput"></a>

```go
func StreamIdInput() *string
```

- *Type:* *string

---

##### `VpcInterfaceNameInput`<sup>Optional</sup> <a name="VpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceNameInput"></a>

```go
func VpcInterfaceNameInput() *string
```

- *Type:* *string

---

##### `WhitelistCidrInput`<sup>Optional</sup> <a name="WhitelistCidrInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidrInput"></a>

```go
func WhitelistCidrInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntitlementArn`<sup>Required</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArn"></a>

```go
func EntitlementArn() *string
```

- *Type:* *string

---

##### `IngestPort`<sup>Required</sup> <a name="IngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPort"></a>

```go
func IngestPort() *f64
```

- *Type:* *f64

---

##### `MaxBitrate`<sup>Required</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrate"></a>

```go
func MaxBitrate() *f64
```

- *Type:* *f64

---

##### `MaxLatency`<sup>Required</sup> <a name="MaxLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatency"></a>

```go
func MaxLatency() *f64
```

- *Type:* *f64

---

##### `MaxSyncBuffer`<sup>Required</sup> <a name="MaxSyncBuffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBuffer"></a>

```go
func MaxSyncBuffer() *f64
```

- *Type:* *f64

---

##### `MinLatency`<sup>Required</sup> <a name="MinLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatency"></a>

```go
func MinLatency() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SenderControlPort`<sup>Required</sup> <a name="SenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPort"></a>

```go
func SenderControlPort() *f64
```

- *Type:* *f64

---

##### `SenderIpAddress`<sup>Required</sup> <a name="SenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddress"></a>

```go
func SenderIpAddress() *string
```

- *Type:* *string

---

##### `SourceListenerAddress`<sup>Required</sup> <a name="SourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddress"></a>

```go
func SourceListenerAddress() *string
```

- *Type:* *string

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPort"></a>

```go
func SourceListenerPort() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceName"></a>

```go
func VpcInterfaceName() *string
```

- *Type:* *string

---

##### `WhitelistCidr`<sup>Required</sup> <a name="WhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidr"></a>

```go
func WhitelistCidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowVpcInterfacesList <a name="MediaconnectFlowVpcInterfacesList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowVpcInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectFlowVpcInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get"></a>

```go
func Get(index *f64) MediaconnectFlowVpcInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowVpcInterfacesOutputReference <a name="MediaconnectFlowVpcInterfacesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflow"

mediaconnectflow.NewMediaconnectFlowVpcInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectFlowVpcInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceIds">ResetNetworkInterfaceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceType">ResetNetworkInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNetworkInterfaceIds` <a name="ResetNetworkInterfaceIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceIds"></a>

```go
func ResetNetworkInterfaceIds()
```

##### `ResetNetworkInterfaceType` <a name="ResetNetworkInterfaceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceType"></a>

```go
func ResetNetworkInterfaceType()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIdsInput">NetworkInterfaceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceTypeInput">NetworkInterfaceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType">NetworkInterfaceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdsInput`<sup>Optional</sup> <a name="NetworkInterfaceIdsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIdsInput"></a>

```go
func NetworkInterfaceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkInterfaceTypeInput`<sup>Optional</sup> <a name="NetworkInterfaceTypeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceTypeInput"></a>

```go
func NetworkInterfaceTypeInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds"></a>

```go
func NetworkInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkInterfaceType`<sup>Required</sup> <a name="NetworkInterfaceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType"></a>

```go
func NetworkInterfaceType() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



