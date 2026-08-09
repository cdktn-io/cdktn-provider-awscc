# `mediatailorChannel` Submodule <a name="`mediatailorChannel` Submodule" id="@cdktn/provider-awscc.mediatailorChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorChannel <a name="MediatailorChannel" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel awscc_mediatailor_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannel(scope Construct, id *string, config MediatailorChannelConfig) MediatailorChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig">MediatailorChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig">MediatailorChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate">PutFillerSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs">PutOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration">PutTimeShiftConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetFillerSlate">ResetFillerSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTimeShiftConfiguration">ResetTimeShiftConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFillerSlate` <a name="PutFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate"></a>

```go
func PutFillerSlate(value MediatailorChannelFillerSlate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration"></a>

```go
func PutLogConfiguration(value MediatailorChannelLogConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

---

##### `PutOutputs` <a name="PutOutputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs"></a>

```go
func PutOutputs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeShiftConfiguration` <a name="PutTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration"></a>

```go
func PutTimeShiftConfiguration(value MediatailorChannelTimeShiftConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

---

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetAudiences"></a>

```go
func ResetAudiences()
```

##### `ResetFillerSlate` <a name="ResetFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetFillerSlate"></a>

```go
func ResetFillerSlate()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetLogConfiguration"></a>

```go
func ResetLogConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTier` <a name="ResetTier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTier"></a>

```go
func ResetTier()
```

##### `ResetTimeShiftConfiguration` <a name="ResetTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTimeShiftConfiguration"></a>

```go
func ResetTimeShiftConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.MediatailorChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.MediatailorChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.MediatailorChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.MediatailorChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediatailorChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediatailorChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediatailorChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlate">FillerSlate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference">MediatailorChannelFillerSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference">MediatailorChannelLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList">MediatailorChannelOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList">MediatailorChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfiguration">TimeShiftConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference">MediatailorChannelTimeShiftConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiencesInput">AudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlateInput">FillerSlateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfigurationInput">LogConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputsInput">OutputsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackModeInput">PlaybackModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfigurationInput">TimeShiftConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiences">Audiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackMode">PlaybackMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FillerSlate`<sup>Required</sup> <a name="FillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlate"></a>

```go
func FillerSlate() MediatailorChannelFillerSlateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference">MediatailorChannelFillerSlateOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfiguration"></a>

```go
func LogConfiguration() MediatailorChannelLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference">MediatailorChannelLogConfigurationOutputReference</a>

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputs"></a>

```go
func Outputs() MediatailorChannelOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList">MediatailorChannelOutputsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tags"></a>

```go
func Tags() MediatailorChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList">MediatailorChannelTagsList</a>

---

##### `TimeShiftConfiguration`<sup>Required</sup> <a name="TimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfiguration"></a>

```go
func TimeShiftConfiguration() MediatailorChannelTimeShiftConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference">MediatailorChannelTimeShiftConfigurationOutputReference</a>

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiencesInput"></a>

```go
func AudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `FillerSlateInput`<sup>Optional</sup> <a name="FillerSlateInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlateInput"></a>

```go
func FillerSlateInput() interface{}
```

- *Type:* interface{}

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfigurationInput"></a>

```go
func LogConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `OutputsInput`<sup>Optional</sup> <a name="OutputsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputsInput"></a>

```go
func OutputsInput() interface{}
```

- *Type:* interface{}

---

##### `PlaybackModeInput`<sup>Optional</sup> <a name="PlaybackModeInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackModeInput"></a>

```go
func PlaybackModeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeShiftConfigurationInput`<sup>Optional</sup> <a name="TimeShiftConfigurationInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfigurationInput"></a>

```go
func TimeShiftConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiences"></a>

```go
func Audiences() *[]*string
```

- *Type:* *[]*string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `PlaybackMode`<sup>Required</sup> <a name="PlaybackMode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackMode"></a>

```go
func PlaybackMode() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorChannelConfig <a name="MediatailorChannelConfig" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

&mediatailorchannel.MediatailorChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelName: *string,
	Outputs: interface{},
	PlaybackMode: *string,
	Audiences: *[]*string,
	FillerSlate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorChannel.MediatailorChannelFillerSlate,
	LogConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorChannel.MediatailorChannelLogConfiguration,
	Tags: interface{},
	Tier: *string,
	TimeShiftConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.outputs">Outputs</a></code> | <code>interface{}</code> | <p>The channel's output properties.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.playbackMode">PlaybackMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.audiences">Audiences</a></code> | <code>*[]*string</code> | <p>The list of audiences defined in channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.fillerSlate">FillerSlate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | <p>Slate VOD source configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | <p>The log configuration for the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to assign to the channel. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tier">Tier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.timeShiftConfiguration">TimeShiftConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | <p>The configuration for time-shifted viewing.</p>. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}.

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.outputs"></a>

```go
Outputs interface{}
```

- *Type:* interface{}

<p>The channel's output properties.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#outputs MediatailorChannel#outputs}

---

##### `PlaybackMode`<sup>Required</sup> <a name="PlaybackMode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.playbackMode"></a>

```go
PlaybackMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}.

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.audiences"></a>

```go
Audiences *[]*string
```

- *Type:* *[]*string

<p>The list of audiences defined in channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#audiences MediatailorChannel#audiences}

---

##### `FillerSlate`<sup>Optional</sup> <a name="FillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.fillerSlate"></a>

```go
FillerSlate MediatailorChannelFillerSlate
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

<p>Slate VOD source configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#filler_slate MediatailorChannel#filler_slate}

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.logConfiguration"></a>

```go
LogConfiguration MediatailorChannelLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

<p>The log configuration for the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#log_configuration MediatailorChannel#log_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to assign to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#tags MediatailorChannel#tags}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}.

---

##### `TimeShiftConfiguration`<sup>Optional</sup> <a name="TimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.timeShiftConfiguration"></a>

```go
TimeShiftConfiguration MediatailorChannelTimeShiftConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

<p>The configuration for time-shifted viewing.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#time_shift_configuration MediatailorChannel#time_shift_configuration}

---

### MediatailorChannelFillerSlate <a name="MediatailorChannelFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

&mediatailorchannel.MediatailorChannelFillerSlate {
	SourceLocationName: *string,
	VodSourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | <p>The name of the source location where the slate VOD source is stored.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | <p>The slate VOD source name. |

---

##### `SourceLocationName`<sup>Optional</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.sourceLocationName"></a>

```go
SourceLocationName *string
```

- *Type:* *string

<p>The name of the source location where the slate VOD source is stored.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#source_location_name MediatailorChannel#source_location_name}

---

##### `VodSourceName`<sup>Optional</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.vodSourceName"></a>

```go
VodSourceName *string
```

- *Type:* *string

<p>The slate VOD source name.

The VOD source must already exist in a source location before it can be used for slate.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#vod_source_name MediatailorChannel#vod_source_name}

---

### MediatailorChannelLogConfiguration <a name="MediatailorChannelLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

&mediatailorchannel.MediatailorChannelLogConfiguration {
	LogTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.property.logTypes">LogTypes</a></code> | <code>*[]*string</code> | <p>The log types.</p>. |

---

##### `LogTypes`<sup>Optional</sup> <a name="LogTypes" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.property.logTypes"></a>

```go
LogTypes *[]*string
```

- *Type:* *[]*string

<p>The log types.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#log_types MediatailorChannel#log_types}

---

### MediatailorChannelOutputs <a name="MediatailorChannelOutputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

&mediatailorchannel.MediatailorChannelOutputs {
	ManifestName: *string,
	SourceGroup: *string,
	DashPlaylistSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings,
	HlsPlaylistSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.manifestName">ManifestName</a></code> | <code>*string</code> | <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.sourceGroup">SourceGroup</a></code> | <code>*string</code> | <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.dashPlaylistSettings">DashPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | <p>Dash manifest configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.hlsPlaylistSettings">HlsPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | <p>HLS playlist configuration parameters.</p>. |

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

<p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#manifest_name MediatailorChannel#manifest_name}

---

##### `SourceGroup`<sup>Required</sup> <a name="SourceGroup" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.sourceGroup"></a>

```go
SourceGroup *string
```

- *Type:* *string

<p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#source_group MediatailorChannel#source_group}

---

##### `DashPlaylistSettings`<sup>Optional</sup> <a name="DashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.dashPlaylistSettings"></a>

```go
DashPlaylistSettings MediatailorChannelOutputsDashPlaylistSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

<p>Dash manifest configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#dash_playlist_settings MediatailorChannel#dash_playlist_settings}

---

##### `HlsPlaylistSettings`<sup>Optional</sup> <a name="HlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.hlsPlaylistSettings"></a>

```go
HlsPlaylistSettings MediatailorChannelOutputsHlsPlaylistSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

<p>HLS playlist configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#hls_playlist_settings MediatailorChannel#hls_playlist_settings}

---

### MediatailorChannelOutputsDashPlaylistSettings <a name="MediatailorChannelOutputsDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

&mediatailorchannel.MediatailorChannelOutputsDashPlaylistSettings {
	ManifestWindowSeconds: *f64,
	MinBufferTimeSeconds: *f64,
	MinUpdatePeriodSeconds: *f64,
	SuggestedPresentationDelaySeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>*f64</code> | <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minUpdatePeriodSeconds">MinUpdatePeriodSeconds</a></code> | <code>*f64</code> | <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.suggestedPresentationDelaySeconds">SuggestedPresentationDelaySeconds</a></code> | <code>*f64</code> | <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. |

---

##### `ManifestWindowSeconds`<sup>Optional</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.manifestWindowSeconds"></a>

```go
ManifestWindowSeconds *f64
```

- *Type:* *f64

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

##### `MinBufferTimeSeconds`<sup>Optional</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minBufferTimeSeconds"></a>

```go
MinBufferTimeSeconds *f64
```

- *Type:* *f64

<p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#min_buffer_time_seconds MediatailorChannel#min_buffer_time_seconds}

---

##### `MinUpdatePeriodSeconds`<sup>Optional</sup> <a name="MinUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minUpdatePeriodSeconds"></a>

```go
MinUpdatePeriodSeconds *f64
```

- *Type:* *f64

<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#min_update_period_seconds MediatailorChannel#min_update_period_seconds}

---

##### `SuggestedPresentationDelaySeconds`<sup>Optional</sup> <a name="SuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.suggestedPresentationDelaySeconds"></a>

```go
SuggestedPresentationDelaySeconds *f64
```

- *Type:* *f64

<p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#suggested_presentation_delay_seconds MediatailorChannel#suggested_presentation_delay_seconds}

---

### MediatailorChannelOutputsHlsPlaylistSettings <a name="MediatailorChannelOutputsHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

&mediatailorchannel.MediatailorChannelOutputsHlsPlaylistSettings {
	AdMarkupType: *[]*string,
	ManifestWindowSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.adMarkupType">AdMarkupType</a></code> | <code>*[]*string</code> | <p>Determines the type of SCTE 35 tags to use in ad markup. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>. |

---

##### `AdMarkupType`<sup>Optional</sup> <a name="AdMarkupType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.adMarkupType"></a>

```go
AdMarkupType *[]*string
```

- *Type:* *[]*string

<p>Determines the type of SCTE 35 tags to use in ad markup.

Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#ad_markup_type MediatailorChannel#ad_markup_type}

---

##### `ManifestWindowSeconds`<sup>Optional</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.manifestWindowSeconds"></a>

```go
ManifestWindowSeconds *f64
```

- *Type:* *f64

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

### MediatailorChannelTags <a name="MediatailorChannelTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

&mediatailorchannel.MediatailorChannelTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#key MediatailorChannel#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#value MediatailorChannel#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#key MediatailorChannel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#value MediatailorChannel#value}.

---

### MediatailorChannelTimeShiftConfiguration <a name="MediatailorChannelTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

&mediatailorchannel.MediatailorChannelTimeShiftConfiguration {
	MaxTimeDelaySeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.property.maxTimeDelaySeconds">MaxTimeDelaySeconds</a></code> | <code>*f64</code> | <p>The maximum time delay for time-shifted viewing. |

---

##### `MaxTimeDelaySeconds`<sup>Optional</sup> <a name="MaxTimeDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.property.maxTimeDelaySeconds"></a>

```go
MaxTimeDelaySeconds *f64
```

- *Type:* *f64

<p>The maximum time delay for time-shifted viewing.

The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_channel#max_time_delay_seconds MediatailorChannel#max_time_delay_seconds}

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorChannelFillerSlateOutputReference <a name="MediatailorChannelFillerSlateOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannelFillerSlateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorChannelFillerSlateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetSourceLocationName">ResetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetVodSourceName">ResetVodSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceLocationName` <a name="ResetSourceLocationName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetSourceLocationName"></a>

```go
func ResetSourceLocationName()
```

##### `ResetVodSourceName` <a name="ResetVodSourceName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetVodSourceName"></a>

```go
func ResetVodSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationNameInput">SourceLocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceNameInput">VodSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationName">SourceLocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceName">VodSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceLocationNameInput`<sup>Optional</sup> <a name="SourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationNameInput"></a>

```go
func SourceLocationNameInput() *string
```

- *Type:* *string

---

##### `VodSourceNameInput`<sup>Optional</sup> <a name="VodSourceNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceNameInput"></a>

```go
func VodSourceNameInput() *string
```

- *Type:* *string

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationName"></a>

```go
func SourceLocationName() *string
```

- *Type:* *string

---

##### `VodSourceName`<sup>Required</sup> <a name="VodSourceName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceName"></a>

```go
func VodSourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorChannelLogConfigurationOutputReference <a name="MediatailorChannelLogConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannelLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorChannelLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resetLogTypes">ResetLogTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogTypes` <a name="ResetLogTypes" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resetLogTypes"></a>

```go
func ResetLogTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypesInput">LogTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypes">LogTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogTypesInput`<sup>Optional</sup> <a name="LogTypesInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypesInput"></a>

```go
func LogTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogTypes`<sup>Required</sup> <a name="LogTypes" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypes"></a>

```go
func LogTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorChannelOutputsDashPlaylistSettingsOutputReference <a name="MediatailorChannelOutputsDashPlaylistSettingsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannelOutputsDashPlaylistSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorChannelOutputsDashPlaylistSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetManifestWindowSeconds">ResetManifestWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinBufferTimeSeconds">ResetMinBufferTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinUpdatePeriodSeconds">ResetMinUpdatePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetSuggestedPresentationDelaySeconds">ResetSuggestedPresentationDelaySeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManifestWindowSeconds` <a name="ResetManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetManifestWindowSeconds"></a>

```go
func ResetManifestWindowSeconds()
```

##### `ResetMinBufferTimeSeconds` <a name="ResetMinBufferTimeSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinBufferTimeSeconds"></a>

```go
func ResetMinBufferTimeSeconds()
```

##### `ResetMinUpdatePeriodSeconds` <a name="ResetMinUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinUpdatePeriodSeconds"></a>

```go
func ResetMinUpdatePeriodSeconds()
```

##### `ResetSuggestedPresentationDelaySeconds` <a name="ResetSuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetSuggestedPresentationDelaySeconds"></a>

```go
func ResetSuggestedPresentationDelaySeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSecondsInput">ManifestWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSecondsInput">MinBufferTimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSecondsInput">MinUpdatePeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySecondsInput">SuggestedPresentationDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSeconds">MinUpdatePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySeconds">SuggestedPresentationDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManifestWindowSecondsInput`<sup>Optional</sup> <a name="ManifestWindowSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSecondsInput"></a>

```go
func ManifestWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `MinBufferTimeSecondsInput`<sup>Optional</sup> <a name="MinBufferTimeSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSecondsInput"></a>

```go
func MinBufferTimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `MinUpdatePeriodSecondsInput`<sup>Optional</sup> <a name="MinUpdatePeriodSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSecondsInput"></a>

```go
func MinUpdatePeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `SuggestedPresentationDelaySecondsInput`<sup>Optional</sup> <a name="SuggestedPresentationDelaySecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySecondsInput"></a>

```go
func SuggestedPresentationDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `MinBufferTimeSeconds`<sup>Required</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSeconds"></a>

```go
func MinBufferTimeSeconds() *f64
```

- *Type:* *f64

---

##### `MinUpdatePeriodSeconds`<sup>Required</sup> <a name="MinUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSeconds"></a>

```go
func MinUpdatePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `SuggestedPresentationDelaySeconds`<sup>Required</sup> <a name="SuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySeconds"></a>

```go
func SuggestedPresentationDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorChannelOutputsHlsPlaylistSettingsOutputReference <a name="MediatailorChannelOutputsHlsPlaylistSettingsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannelOutputsHlsPlaylistSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorChannelOutputsHlsPlaylistSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetAdMarkupType">ResetAdMarkupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetManifestWindowSeconds">ResetManifestWindowSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdMarkupType` <a name="ResetAdMarkupType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetAdMarkupType"></a>

```go
func ResetAdMarkupType()
```

##### `ResetManifestWindowSeconds` <a name="ResetManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetManifestWindowSeconds"></a>

```go
func ResetManifestWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupTypeInput">AdMarkupTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSecondsInput">ManifestWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupType">AdMarkupType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdMarkupTypeInput`<sup>Optional</sup> <a name="AdMarkupTypeInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupTypeInput"></a>

```go
func AdMarkupTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ManifestWindowSecondsInput`<sup>Optional</sup> <a name="ManifestWindowSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSecondsInput"></a>

```go
func ManifestWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `AdMarkupType`<sup>Required</sup> <a name="AdMarkupType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupType"></a>

```go
func AdMarkupType() *[]*string
```

- *Type:* *[]*string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorChannelOutputsList <a name="MediatailorChannelOutputsList" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannelOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorChannelOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get"></a>

```go
func Get(index *f64) MediatailorChannelOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorChannelOutputsOutputReference <a name="MediatailorChannelOutputsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannelOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorChannelOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings">PutDashPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings">PutHlsPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetDashPlaylistSettings">ResetDashPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetHlsPlaylistSettings">ResetHlsPlaylistSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDashPlaylistSettings` <a name="PutDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings"></a>

```go
func PutDashPlaylistSettings(value MediatailorChannelOutputsDashPlaylistSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

---

##### `PutHlsPlaylistSettings` <a name="PutHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings"></a>

```go
func PutHlsPlaylistSettings(value MediatailorChannelOutputsHlsPlaylistSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

---

##### `ResetDashPlaylistSettings` <a name="ResetDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetDashPlaylistSettings"></a>

```go
func ResetDashPlaylistSettings()
```

##### `ResetHlsPlaylistSettings` <a name="ResetHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetHlsPlaylistSettings"></a>

```go
func ResetHlsPlaylistSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettings">DashPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference">MediatailorChannelOutputsDashPlaylistSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettings">HlsPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference">MediatailorChannelOutputsHlsPlaylistSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettingsInput">DashPlaylistSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettingsInput">HlsPlaylistSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroupInput">SourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroup">SourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DashPlaylistSettings`<sup>Required</sup> <a name="DashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettings"></a>

```go
func DashPlaylistSettings() MediatailorChannelOutputsDashPlaylistSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference">MediatailorChannelOutputsDashPlaylistSettingsOutputReference</a>

---

##### `HlsPlaylistSettings`<sup>Required</sup> <a name="HlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettings"></a>

```go
func HlsPlaylistSettings() MediatailorChannelOutputsHlsPlaylistSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference">MediatailorChannelOutputsHlsPlaylistSettingsOutputReference</a>

---

##### `DashPlaylistSettingsInput`<sup>Optional</sup> <a name="DashPlaylistSettingsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettingsInput"></a>

```go
func DashPlaylistSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `HlsPlaylistSettingsInput`<sup>Optional</sup> <a name="HlsPlaylistSettingsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettingsInput"></a>

```go
func HlsPlaylistSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `SourceGroupInput`<sup>Optional</sup> <a name="SourceGroupInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroupInput"></a>

```go
func SourceGroupInput() *string
```

- *Type:* *string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `SourceGroup`<sup>Required</sup> <a name="SourceGroup" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroup"></a>

```go
func SourceGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorChannelTagsList <a name="MediatailorChannelTagsList" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediatailorChannelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get"></a>

```go
func Get(index *f64) MediatailorChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorChannelTagsOutputReference <a name="MediatailorChannelTagsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediatailorChannelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediatailorChannelTimeShiftConfigurationOutputReference <a name="MediatailorChannelTimeShiftConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediatailorchannel"

mediatailorchannel.NewMediatailorChannelTimeShiftConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediatailorChannelTimeShiftConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resetMaxTimeDelaySeconds">ResetMaxTimeDelaySeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTimeDelaySeconds` <a name="ResetMaxTimeDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resetMaxTimeDelaySeconds"></a>

```go
func ResetMaxTimeDelaySeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySecondsInput">MaxTimeDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySeconds">MaxTimeDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTimeDelaySecondsInput`<sup>Optional</sup> <a name="MaxTimeDelaySecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySecondsInput"></a>

```go
func MaxTimeDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxTimeDelaySeconds`<sup>Required</sup> <a name="MaxTimeDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySeconds"></a>

```go
func MaxTimeDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



