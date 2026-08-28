# `mediapackagev2Channel` Submodule <a name="`mediapackagev2Channel` Submodule" id="@cdktn/provider-awscc.mediapackagev2Channel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mediapackagev2Channel <a name="Mediapackagev2Channel" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel awscc_mediapackagev2_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.NewMediapackagev2Channel(scope Construct, id *string, config Mediapackagev2ChannelConfig) Mediapackagev2Channel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig">Mediapackagev2ChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig">Mediapackagev2ChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration">PutInputSwitchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration">PutOutputHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputSwitchConfiguration">ResetInputSwitchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputType">ResetInputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputHeaderConfiguration">ResetOutputHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputLockingMode">ResetOutputLockingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputSwitchConfiguration` <a name="PutInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration"></a>

```go
func PutInputSwitchConfiguration(value Mediapackagev2ChannelInputSwitchConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

---

##### `PutOutputHeaderConfiguration` <a name="PutOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration"></a>

```go
func PutOutputHeaderConfiguration(value Mediapackagev2ChannelOutputHeaderConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInputSwitchConfiguration` <a name="ResetInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputSwitchConfiguration"></a>

```go
func ResetInputSwitchConfiguration()
```

##### `ResetInputType` <a name="ResetInputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputType"></a>

```go
func ResetInputType()
```

##### `ResetOutputHeaderConfiguration` <a name="ResetOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputHeaderConfiguration"></a>

```go
func ResetOutputHeaderConfiguration()
```

##### `ResetOutputLockingMode` <a name="ResetOutputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputLockingMode"></a>

```go
func ResetOutputLockingMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Mediapackagev2Channel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.Mediapackagev2Channel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.Mediapackagev2Channel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.Mediapackagev2Channel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.Mediapackagev2Channel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Mediapackagev2Channel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Mediapackagev2Channel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Mediapackagev2Channel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Mediapackagev2Channel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpoints">IngestEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList">Mediapackagev2ChannelIngestEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpointUrls">IngestEndpointUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfiguration">InputSwitchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference">Mediapackagev2ChannelInputSwitchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfiguration">OutputHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference">Mediapackagev2ChannelOutputHeaderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList">Mediapackagev2ChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupNameInput">ChannelGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfigurationInput">InputSwitchConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputTypeInput">InputTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfigurationInput">OutputHeaderConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingModeInput">OutputLockingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupName">ChannelGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputType">InputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingMode">OutputLockingMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngestEndpoints`<sup>Required</sup> <a name="IngestEndpoints" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpoints"></a>

```go
func IngestEndpoints() Mediapackagev2ChannelIngestEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList">Mediapackagev2ChannelIngestEndpointsList</a>

---

##### `IngestEndpointUrls`<sup>Required</sup> <a name="IngestEndpointUrls" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpointUrls"></a>

```go
func IngestEndpointUrls() *[]*string
```

- *Type:* *[]*string

---

##### `InputSwitchConfiguration`<sup>Required</sup> <a name="InputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfiguration"></a>

```go
func InputSwitchConfiguration() Mediapackagev2ChannelInputSwitchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference">Mediapackagev2ChannelInputSwitchConfigurationOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `OutputHeaderConfiguration`<sup>Required</sup> <a name="OutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfiguration"></a>

```go
func OutputHeaderConfiguration() Mediapackagev2ChannelOutputHeaderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference">Mediapackagev2ChannelOutputHeaderConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tags"></a>

```go
func Tags() Mediapackagev2ChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList">Mediapackagev2ChannelTagsList</a>

---

##### `ChannelGroupNameInput`<sup>Optional</sup> <a name="ChannelGroupNameInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupNameInput"></a>

```go
func ChannelGroupNameInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InputSwitchConfigurationInput`<sup>Optional</sup> <a name="InputSwitchConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfigurationInput"></a>

```go
func InputSwitchConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InputTypeInput`<sup>Optional</sup> <a name="InputTypeInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputTypeInput"></a>

```go
func InputTypeInput() *string
```

- *Type:* *string

---

##### `OutputHeaderConfigurationInput`<sup>Optional</sup> <a name="OutputHeaderConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfigurationInput"></a>

```go
func OutputHeaderConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `OutputLockingModeInput`<sup>Optional</sup> <a name="OutputLockingModeInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingModeInput"></a>

```go
func OutputLockingModeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupName"></a>

```go
func ChannelGroupName() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputType"></a>

```go
func InputType() *string
```

- *Type:* *string

---

##### `OutputLockingMode`<sup>Required</sup> <a name="OutputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingMode"></a>

```go
func OutputLockingMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2ChannelConfig <a name="Mediapackagev2ChannelConfig" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

&mediapackagev2channel.Mediapackagev2ChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelGroupName: *string,
	ChannelName: *string,
	Description: *string,
	InputSwitchConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration,
	InputType: *string,
	OutputHeaderConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration,
	OutputLockingMode: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelGroupName">ChannelGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.description">Description</a></code> | <code>*string</code> | <p>Enter any descriptive text that helps you to identify the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputSwitchConfiguration">InputSwitchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputType">InputType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputHeaderConfiguration">OutputHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputLockingMode">OutputLockingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelGroupName"></a>

```go
ChannelGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}.

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

<p>Enter any descriptive text that helps you to identify the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#description Mediapackagev2Channel#description}

---

##### `InputSwitchConfiguration`<sup>Optional</sup> <a name="InputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputSwitchConfiguration"></a>

```go
InputSwitchConfiguration Mediapackagev2ChannelInputSwitchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

<p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#input_switch_configuration Mediapackagev2Channel#input_switch_configuration}

---

##### `InputType`<sup>Optional</sup> <a name="InputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputType"></a>

```go
InputType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}.

---

##### `OutputHeaderConfiguration`<sup>Optional</sup> <a name="OutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputHeaderConfiguration"></a>

```go
OutputHeaderConfiguration Mediapackagev2ChannelOutputHeaderConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

<p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#output_header_configuration Mediapackagev2Channel#output_header_configuration}

---

##### `OutputLockingMode`<sup>Optional</sup> <a name="OutputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputLockingMode"></a>

```go
OutputLockingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}.

---

### Mediapackagev2ChannelIngestEndpoints <a name="Mediapackagev2ChannelIngestEndpoints" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

&mediapackagev2channel.Mediapackagev2ChannelIngestEndpoints {

}
```


### Mediapackagev2ChannelInputSwitchConfiguration <a name="Mediapackagev2ChannelInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

&mediapackagev2channel.Mediapackagev2ChannelInputSwitchConfiguration {
	MqcsInputSwitching: interface{},
	PreferredInput: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.mqcsInputSwitching">MqcsInputSwitching</a></code> | <code>interface{}</code> | <p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.preferredInput">PreferredInput</a></code> | <code>*f64</code> | <p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores. |

---

##### `MqcsInputSwitching`<sup>Optional</sup> <a name="MqcsInputSwitching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.mqcsInputSwitching"></a>

```go
MqcsInputSwitching interface{}
```

- *Type:* interface{}

<p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS.

Default is false. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#mqcs_input_switching Mediapackagev2Channel#mqcs_input_switching}

---

##### `PreferredInput`<sup>Optional</sup> <a name="PreferredInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.preferredInput"></a>

```go
PreferredInput *f64
```

- *Type:* *f64

<p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores.

Select <code>1</code> to prefer the first ingest endpoint, or <code>2</code> to prefer the second ingest endpoint. If you don't specify a preferred input, MediaPackage uses its default switching behavior when MQCS scores are equal.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#preferred_input Mediapackagev2Channel#preferred_input}

---

### Mediapackagev2ChannelOutputHeaderConfiguration <a name="Mediapackagev2ChannelOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

&mediapackagev2channel.Mediapackagev2ChannelOutputHeaderConfiguration {
	PublishMqcs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.property.publishMqcs">PublishMqcs</a></code> | <code>interface{}</code> | <p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. |

---

##### `PublishMqcs`<sup>Optional</sup> <a name="PublishMqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.property.publishMqcs"></a>

```go
PublishMqcs interface{}
```

- *Type:* interface{}

<p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN.

This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#publish_mqcs Mediapackagev2Channel#publish_mqcs}

---

### Mediapackagev2ChannelTags <a name="Mediapackagev2ChannelTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

&mediapackagev2channel.Mediapackagev2ChannelTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#key Mediapackagev2Channel#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#value Mediapackagev2Channel#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#key Mediapackagev2Channel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_channel#value Mediapackagev2Channel#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2ChannelIngestEndpointsList <a name="Mediapackagev2ChannelIngestEndpointsList" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.NewMediapackagev2ChannelIngestEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Mediapackagev2ChannelIngestEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get"></a>

```go
func Get(index *f64) Mediapackagev2ChannelIngestEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Mediapackagev2ChannelIngestEndpointsOutputReference <a name="Mediapackagev2ChannelIngestEndpointsOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.NewMediapackagev2ChannelIngestEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Mediapackagev2ChannelIngestEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints">Mediapackagev2ChannelIngestEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() Mediapackagev2ChannelIngestEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints">Mediapackagev2ChannelIngestEndpoints</a>

---


### Mediapackagev2ChannelInputSwitchConfigurationOutputReference <a name="Mediapackagev2ChannelInputSwitchConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.NewMediapackagev2ChannelInputSwitchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2ChannelInputSwitchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetMqcsInputSwitching">ResetMqcsInputSwitching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetPreferredInput">ResetPreferredInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMqcsInputSwitching` <a name="ResetMqcsInputSwitching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetMqcsInputSwitching"></a>

```go
func ResetMqcsInputSwitching()
```

##### `ResetPreferredInput` <a name="ResetPreferredInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetPreferredInput"></a>

```go
func ResetPreferredInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitchingInput">MqcsInputSwitchingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInputInput">PreferredInputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitching">MqcsInputSwitching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInput">PreferredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MqcsInputSwitchingInput`<sup>Optional</sup> <a name="MqcsInputSwitchingInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitchingInput"></a>

```go
func MqcsInputSwitchingInput() interface{}
```

- *Type:* interface{}

---

##### `PreferredInputInput`<sup>Optional</sup> <a name="PreferredInputInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInputInput"></a>

```go
func PreferredInputInput() *f64
```

- *Type:* *f64

---

##### `MqcsInputSwitching`<sup>Required</sup> <a name="MqcsInputSwitching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitching"></a>

```go
func MqcsInputSwitching() interface{}
```

- *Type:* interface{}

---

##### `PreferredInput`<sup>Required</sup> <a name="PreferredInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInput"></a>

```go
func PreferredInput() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2ChannelOutputHeaderConfigurationOutputReference <a name="Mediapackagev2ChannelOutputHeaderConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.NewMediapackagev2ChannelOutputHeaderConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2ChannelOutputHeaderConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resetPublishMqcs">ResetPublishMqcs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublishMqcs` <a name="ResetPublishMqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resetPublishMqcs"></a>

```go
func ResetPublishMqcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcsInput">PublishMqcsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcs">PublishMqcs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublishMqcsInput`<sup>Optional</sup> <a name="PublishMqcsInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcsInput"></a>

```go
func PublishMqcsInput() interface{}
```

- *Type:* interface{}

---

##### `PublishMqcs`<sup>Required</sup> <a name="PublishMqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcs"></a>

```go
func PublishMqcs() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2ChannelTagsList <a name="Mediapackagev2ChannelTagsList" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.NewMediapackagev2ChannelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Mediapackagev2ChannelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get"></a>

```go
func Get(index *f64) Mediapackagev2ChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2ChannelTagsOutputReference <a name="Mediapackagev2ChannelTagsOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2channel"

mediapackagev2channel.NewMediapackagev2ChannelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Mediapackagev2ChannelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



