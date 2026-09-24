# `configDeliveryChannel` Submodule <a name="`configDeliveryChannel` Submodule" id="@cdktn/provider-awscc.configDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeliveryChannel <a name="ConfigDeliveryChannel" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel awscc_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configdeliverychannel"

configdeliverychannel.NewConfigDeliveryChannel(scope Construct, id *string, config ConfigDeliveryChannelConfig) ConfigDeliveryChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig">ConfigDeliveryChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties">PutConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties">ResetConfigSnapshotDeliveryProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn">ResetS3KmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigSnapshotDeliveryProperties` <a name="PutConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties"></a>

```go
func PutConfigSnapshotDeliveryProperties(value ConfigDeliveryChannelConfigSnapshotDeliveryProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.putConfigSnapshotDeliveryProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---

##### `ResetConfigSnapshotDeliveryProperties` <a name="ResetConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetConfigSnapshotDeliveryProperties"></a>

```go
func ResetConfigSnapshotDeliveryProperties()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetName"></a>

```go
func ResetName()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KeyPrefix"></a>

```go
func ResetS3KeyPrefix()
```

##### `ResetS3KmsKeyArn` <a name="ResetS3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetS3KmsKeyArn"></a>

```go
func ResetS3KmsKeyArn()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.resetSnsTopicArn"></a>

```go
func ResetSnsTopicArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configdeliverychannel"

configdeliverychannel.ConfigDeliveryChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configdeliverychannel"

configdeliverychannel.ConfigDeliveryChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configdeliverychannel"

configdeliverychannel.ConfigDeliveryChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configdeliverychannel"

configdeliverychannel.ConfigDeliveryChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConfigDeliveryChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigDeliveryChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigDeliveryChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConfigDeliveryChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties">ConfigSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput">ConfigSnapshotDeliveryPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput">S3KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn">S3KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigSnapshotDeliveryProperties`<sup>Required</sup> <a name="ConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryProperties"></a>

```go
func ConfigSnapshotDeliveryProperties() ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ConfigSnapshotDeliveryPropertiesInput`<sup>Optional</sup> <a name="ConfigSnapshotDeliveryPropertiesInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.configSnapshotDeliveryPropertiesInput"></a>

```go
func ConfigSnapshotDeliveryPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefixInput"></a>

```go
func S3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `S3KmsKeyArnInput`<sup>Optional</sup> <a name="S3KmsKeyArnInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArnInput"></a>

```go
func S3KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArnInput"></a>

```go
func SnsTopicArnInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `S3KmsKeyArn`<sup>Required</sup> <a name="S3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```go
func S3KmsKeyArn() *string
```

- *Type:* *string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeliveryChannelConfig <a name="ConfigDeliveryChannelConfig" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configdeliverychannel"

&configdeliverychannel.ConfigDeliveryChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	S3BucketName: *string,
	ConfigSnapshotDeliveryProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties,
	Name: *string,
	S3KeyPrefix: *string,
	S3KmsKeyArn: *string,
	SnsTopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties">ConfigSnapshotDeliveryProperties</a></code> | <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name">Name</a></code> | <code>*string</code> | The name of the delivery channel. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | The prefix for the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn">S3KmsKeyArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}

---

##### `ConfigSnapshotDeliveryProperties`<sup>Optional</sup> <a name="ConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.configSnapshotDeliveryProperties"></a>

```go
ConfigSnapshotDeliveryProperties ConfigDeliveryChannelConfigSnapshotDeliveryProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties">ConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#config_snapshot_delivery_properties ConfigDeliveryChannel#config_snapshot_delivery_properties}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the delivery channel.

By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#name ConfigDeliveryChannel#name}

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KeyPrefix"></a>

```go
S3KeyPrefix *string
```

- *Type:* *string

The prefix for the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}

---

##### `S3KmsKeyArn`<sup>Optional</sup> <a name="S3KmsKeyArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.s3KmsKeyArn"></a>

```go
S3KmsKeyArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config.

Must belong to the same Region as the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfig.property.snsTopicArn"></a>

```go
SnsTopicArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}

---

### ConfigDeliveryChannelConfigSnapshotDeliveryProperties <a name="ConfigDeliveryChannelConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configdeliverychannel"

&configdeliverychannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties {
	DeliveryFrequency: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency">DeliveryFrequency</a></code> | <code>*string</code> | The frequency with which AWS Config delivers configuration snapshots. |

---

##### `DeliveryFrequency`<sup>Optional</sup> <a name="DeliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryProperties.property.deliveryFrequency"></a>

```go
DeliveryFrequency *string
```

- *Type:* *string

The frequency with which AWS Config delivers configuration snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference <a name="ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configdeliverychannel"

configdeliverychannel.NewConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency">ResetDeliveryFrequency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryFrequency` <a name="ResetDeliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resetDeliveryFrequency"></a>

```go
func ResetDeliveryFrequency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput">DeliveryFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">DeliveryFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryFrequencyInput`<sup>Optional</sup> <a name="DeliveryFrequencyInput" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequencyInput"></a>

```go
func DeliveryFrequencyInput() *string
```

- *Type:* *string

---

##### `DeliveryFrequency`<sup>Required</sup> <a name="DeliveryFrequency" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```go
func DeliveryFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configDeliveryChannel.ConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



