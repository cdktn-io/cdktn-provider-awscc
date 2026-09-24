# `chimeChannel` Submodule <a name="`chimeChannel` Submodule" id="@cdktn/provider-awscc.chimeChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeChannel <a name="ChimeChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel awscc_chime_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.NewChimeChannel(scope Construct, id *string, config ChimeChannelConfig) ChimeChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig">ChimeChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig">ChimeChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration">PutElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings">PutExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration">ResetElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings">ResetExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns">ResetMemberArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns">ResetModeratorArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy">ResetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutElasticChannelConfiguration` <a name="PutElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration"></a>

```go
func PutElasticChannelConfiguration(value ChimeChannelElasticChannelConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---

##### `PutExpirationSettings` <a name="PutExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings"></a>

```go
func PutExpirationSettings(value ChimeChannelExpirationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId"></a>

```go
func ResetChannelId()
```

##### `ResetElasticChannelConfiguration` <a name="ResetElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration"></a>

```go
func ResetElasticChannelConfiguration()
```

##### `ResetExpirationSettings` <a name="ResetExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings"></a>

```go
func ResetExpirationSettings()
```

##### `ResetMemberArns` <a name="ResetMemberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns"></a>

```go
func ResetMemberArns()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode"></a>

```go
func ResetMode()
```

##### `ResetModeratorArns` <a name="ResetModeratorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns"></a>

```go
func ResetModeratorArns()
```

##### `ResetPrivacy` <a name="ResetPrivacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy"></a>

```go
func ResetPrivacy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.ChimeChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.ChimeChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.ChimeChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.ChimeChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChimeChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChimeChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChimeChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn">ChannelFlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration">ElasticChannelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings">ExpirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp">LastMessageTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput">AppInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput">ChimeBearerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput">ElasticChannelConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput">ExpirationSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput">MemberArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput">ModeratorArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput">PrivacyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn">AppInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer">ChimeBearer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns">MemberArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns">ModeratorArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy">Privacy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ChannelFlowArn`<sup>Required</sup> <a name="ChannelFlowArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn"></a>

```go
func ChannelFlowArn() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy"></a>

```go
func CreatedBy() ChimeChannelCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `ElasticChannelConfiguration`<sup>Required</sup> <a name="ElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration"></a>

```go
func ElasticChannelConfiguration() ChimeChannelElasticChannelConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a>

---

##### `ExpirationSettings`<sup>Required</sup> <a name="ExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings"></a>

```go
func ExpirationSettings() ChimeChannelExpirationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastMessageTimestamp`<sup>Required</sup> <a name="LastMessageTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp"></a>

```go
func LastMessageTimestamp() *string
```

- *Type:* *string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp"></a>

```go
func LastUpdatedTimestamp() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags"></a>

```go
func Tags() ChimeChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a>

---

##### `AppInstanceArnInput`<sup>Optional</sup> <a name="AppInstanceArnInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput"></a>

```go
func AppInstanceArnInput() *string
```

- *Type:* *string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `ChimeBearerInput`<sup>Optional</sup> <a name="ChimeBearerInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput"></a>

```go
func ChimeBearerInput() *string
```

- *Type:* *string

---

##### `ElasticChannelConfigurationInput`<sup>Optional</sup> <a name="ElasticChannelConfigurationInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput"></a>

```go
func ElasticChannelConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationSettingsInput`<sup>Optional</sup> <a name="ExpirationSettingsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput"></a>

```go
func ExpirationSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MemberArnsInput`<sup>Optional</sup> <a name="MemberArnsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput"></a>

```go
func MemberArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ModeratorArnsInput`<sup>Optional</sup> <a name="ModeratorArnsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput"></a>

```go
func ModeratorArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput"></a>

```go
func PrivacyInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn"></a>

```go
func AppInstanceArn() *string
```

- *Type:* *string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `ChimeBearer`<sup>Required</sup> <a name="ChimeBearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer"></a>

```go
func ChimeBearer() *string
```

- *Type:* *string

---

##### `MemberArns`<sup>Required</sup> <a name="MemberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns"></a>

```go
func MemberArns() *[]*string
```

- *Type:* *[]*string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModeratorArns`<sup>Required</sup> <a name="ModeratorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns"></a>

```go
func ModeratorArns() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy"></a>

```go
func Privacy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeChannelConfig <a name="ChimeChannelConfig" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

&chimechannel.ChimeChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AppInstanceArn: *string,
	ChimeBearer: *string,
	Name: *string,
	ChannelId: *string,
	ElasticChannelConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeChannel.ChimeChannelElasticChannelConfiguration,
	ExpirationSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeChannel.ChimeChannelExpirationSettings,
	MemberArns: *[]*string,
	Metadata: *string,
	Mode: *string,
	ModeratorArns: *[]*string,
	Privacy: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn">AppInstanceArn</a></code> | <code>*string</code> | The ARN of the AppInstance that contains the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer">ChimeBearer</a></code> | <code>*string</code> | The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name">Name</a></code> | <code>*string</code> | The name of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId">ChannelId</a></code> | <code>*string</code> | The ID of the channel. When omitted, the service generates a UUID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration">ElasticChannelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | The attributes required to configure and create an elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings">ExpirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | Settings that control the interval after which the channel is automatically deleted. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns">MemberArns</a></code> | <code>*[]*string</code> | The ARNs of the AppInstanceUsers to add to the channel as members when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata">Metadata</a></code> | <code>*string</code> | The metadata of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode">Mode</a></code> | <code>*string</code> | The channel mode. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns">ModeratorArns</a></code> | <code>*[]*string</code> | The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy">Privacy</a></code> | <code>*string</code> | The channel's privacy level. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the channel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn"></a>

```go
AppInstanceArn *string
```

- *Type:* *string

The ARN of the AppInstance that contains the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#app_instance_arn ChimeChannel#app_instance_arn}

---

##### `ChimeBearer`<sup>Required</sup> <a name="ChimeBearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer"></a>

```go
ChimeBearer *string
```

- *Type:* *string

The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel.

Whichever of the two creates a channel automatically becomes one of its moderators, so the same ARN can subsequently read, update and delete the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#chime_bearer ChimeChannel#chime_bearer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#name ChimeChannel#name}

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

The ID of the channel. When omitted, the service generates a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#channel_id ChimeChannel#channel_id}

---

##### `ElasticChannelConfiguration`<sup>Optional</sup> <a name="ElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration"></a>

```go
ElasticChannelConfiguration ChimeChannelElasticChannelConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

The attributes required to configure and create an elastic channel.

An elastic channel must use RESTRICTED mode, cannot be created with MemberArns, and is available only in some regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#elastic_channel_configuration ChimeChannel#elastic_channel_configuration}

---

##### `ExpirationSettings`<sup>Optional</sup> <a name="ExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings"></a>

```go
ExpirationSettings ChimeChannelExpirationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

Settings that control the interval after which the channel is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_settings ChimeChannel#expiration_settings}

---

##### `MemberArns`<sup>Optional</sup> <a name="MemberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns"></a>

```go
MemberArns *[]*string
```

- *Type:* *[]*string

The ARNs of the AppInstanceUsers to add to the channel as members when it is created.

Cannot be combined with ElasticChannelConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#member_arns ChimeChannel#member_arns}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

The metadata of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#metadata ChimeChannel#metadata}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The channel mode.

In an UNRESTRICTED channel, members can add themselves and other members; in a RESTRICTED channel, only administrators and moderators can add members. An elastic channel must be RESTRICTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#mode ChimeChannel#mode}

---

##### `ModeratorArns`<sup>Optional</sup> <a name="ModeratorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns"></a>

```go
ModeratorArns *[]*string
```

- *Type:* *[]*string

The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#moderator_arns ChimeChannel#moderator_arns}

---

##### `Privacy`<sup>Optional</sup> <a name="Privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy"></a>

```go
Privacy *string
```

- *Type:* *string

The channel's privacy level.

A PUBLIC channel is discoverable by anyone in the AppInstance; a PRIVATE channel is not. Privacy cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#privacy ChimeChannel#privacy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#tags ChimeChannel#tags}

---

### ChimeChannelCreatedBy <a name="ChimeChannelCreatedBy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

&chimechannel.ChimeChannelCreatedBy {

}
```


### ChimeChannelElasticChannelConfiguration <a name="ChimeChannelElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

&chimechannel.ChimeChannelElasticChannelConfiguration {
	MaximumSubChannels: *f64,
	MinimumMembershipPercentage: *f64,
	TargetMembershipsPerSubChannel: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels">MaximumSubChannels</a></code> | <code>*f64</code> | The maximum number of SubChannels allowed in the elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage">MinimumMembershipPercentage</a></code> | <code>*f64</code> | The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel">TargetMembershipsPerSubChannel</a></code> | <code>*f64</code> | The maximum number of members allowed in a SubChannel. |

---

##### `MaximumSubChannels`<sup>Optional</sup> <a name="MaximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels"></a>

```go
MaximumSubChannels *f64
```

- *Type:* *f64

The maximum number of SubChannels allowed in the elastic channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#maximum_sub_channels ChimeChannel#maximum_sub_channels}

---

##### `MinimumMembershipPercentage`<sup>Optional</sup> <a name="MinimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage"></a>

```go
MinimumMembershipPercentage *f64
```

- *Type:* *f64

The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#minimum_membership_percentage ChimeChannel#minimum_membership_percentage}

---

##### `TargetMembershipsPerSubChannel`<sup>Optional</sup> <a name="TargetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel"></a>

```go
TargetMembershipsPerSubChannel *f64
```

- *Type:* *f64

The maximum number of members allowed in a SubChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#target_memberships_per_sub_channel ChimeChannel#target_memberships_per_sub_channel}

---

### ChimeChannelExpirationSettings <a name="ChimeChannelExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

&chimechannel.ChimeChannelExpirationSettings {
	ExpirationCriterion: *string,
	ExpirationDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion">ExpirationCriterion</a></code> | <code>*string</code> | The condition the expiration period is measured from. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays">ExpirationDays</a></code> | <code>*f64</code> | The period in days after which the system automatically deletes the channel. |

---

##### `ExpirationCriterion`<sup>Optional</sup> <a name="ExpirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion"></a>

```go
ExpirationCriterion *string
```

- *Type:* *string

The condition the expiration period is measured from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_criterion ChimeChannel#expiration_criterion}

---

##### `ExpirationDays`<sup>Optional</sup> <a name="ExpirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays"></a>

```go
ExpirationDays *f64
```

- *Type:* *f64

The period in days after which the system automatically deletes the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_days ChimeChannel#expiration_days}

---

### ChimeChannelTags <a name="ChimeChannelTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

&chimechannel.ChimeChannelTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key">Key</a></code> | <code>*string</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value">Value</a></code> | <code>*string</code> | The value in a tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#key ChimeChannel#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#value ChimeChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeChannelCreatedByOutputReference <a name="ChimeChannelCreatedByOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.NewChimeChannelCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeChannelCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() ChimeChannelCreatedBy
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a>

---


### ChimeChannelElasticChannelConfigurationOutputReference <a name="ChimeChannelElasticChannelConfigurationOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.NewChimeChannelElasticChannelConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeChannelElasticChannelConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels">ResetMaximumSubChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage">ResetMinimumMembershipPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel">ResetTargetMembershipsPerSubChannel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumSubChannels` <a name="ResetMaximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels"></a>

```go
func ResetMaximumSubChannels()
```

##### `ResetMinimumMembershipPercentage` <a name="ResetMinimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage"></a>

```go
func ResetMinimumMembershipPercentage()
```

##### `ResetTargetMembershipsPerSubChannel` <a name="ResetTargetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel"></a>

```go
func ResetTargetMembershipsPerSubChannel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput">MaximumSubChannelsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput">MinimumMembershipPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput">TargetMembershipsPerSubChannelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels">MaximumSubChannels</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage">MinimumMembershipPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel">TargetMembershipsPerSubChannel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumSubChannelsInput`<sup>Optional</sup> <a name="MaximumSubChannelsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput"></a>

```go
func MaximumSubChannelsInput() *f64
```

- *Type:* *f64

---

##### `MinimumMembershipPercentageInput`<sup>Optional</sup> <a name="MinimumMembershipPercentageInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput"></a>

```go
func MinimumMembershipPercentageInput() *f64
```

- *Type:* *f64

---

##### `TargetMembershipsPerSubChannelInput`<sup>Optional</sup> <a name="TargetMembershipsPerSubChannelInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput"></a>

```go
func TargetMembershipsPerSubChannelInput() *f64
```

- *Type:* *f64

---

##### `MaximumSubChannels`<sup>Required</sup> <a name="MaximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels"></a>

```go
func MaximumSubChannels() *f64
```

- *Type:* *f64

---

##### `MinimumMembershipPercentage`<sup>Required</sup> <a name="MinimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage"></a>

```go
func MinimumMembershipPercentage() *f64
```

- *Type:* *f64

---

##### `TargetMembershipsPerSubChannel`<sup>Required</sup> <a name="TargetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel"></a>

```go
func TargetMembershipsPerSubChannel() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeChannelExpirationSettingsOutputReference <a name="ChimeChannelExpirationSettingsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.NewChimeChannelExpirationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeChannelExpirationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion">ResetExpirationCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays">ResetExpirationDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationCriterion` <a name="ResetExpirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion"></a>

```go
func ResetExpirationCriterion()
```

##### `ResetExpirationDays` <a name="ResetExpirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays"></a>

```go
func ResetExpirationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput">ExpirationCriterionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput">ExpirationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion">ExpirationCriterion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays">ExpirationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationCriterionInput`<sup>Optional</sup> <a name="ExpirationCriterionInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput"></a>

```go
func ExpirationCriterionInput() *string
```

- *Type:* *string

---

##### `ExpirationDaysInput`<sup>Optional</sup> <a name="ExpirationDaysInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput"></a>

```go
func ExpirationDaysInput() *f64
```

- *Type:* *f64

---

##### `ExpirationCriterion`<sup>Required</sup> <a name="ExpirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion"></a>

```go
func ExpirationCriterion() *string
```

- *Type:* *string

---

##### `ExpirationDays`<sup>Required</sup> <a name="ExpirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays"></a>

```go
func ExpirationDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeChannelTagsList <a name="ChimeChannelTagsList" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.NewChimeChannelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChimeChannelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get"></a>

```go
func Get(index *f64) ChimeChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeChannelTagsOutputReference <a name="ChimeChannelTagsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimechannel"

chimechannel.NewChimeChannelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChimeChannelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



