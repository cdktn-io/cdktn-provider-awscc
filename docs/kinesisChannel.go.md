# `kinesisChannel` Submodule <a name="`kinesisChannel` Submodule" id="@cdktn/provider-awscc.kinesisChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisChannel <a name="KinesisChannel" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel awscc_kinesis_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannel(scope Construct, id *string, config KinesisChannelConfig) KinesisChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig">KinesisChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig">KinesisChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration">PutS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration">PutS3TablesDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putStreamConfigurationList">PutStreamConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3DestinationConfiguration">ResetS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3TablesDestinationConfiguration">ResetS3TablesDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value KinesisChannelEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putLoggingConfiguration"></a>

```go
func PutLoggingConfiguration(value KinesisChannelLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

---

##### `PutS3DestinationConfiguration` <a name="PutS3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration"></a>

```go
func PutS3DestinationConfiguration(value KinesisChannelS3DestinationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3DestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

---

##### `PutS3TablesDestinationConfiguration` <a name="PutS3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration"></a>

```go
func PutS3TablesDestinationConfiguration(value KinesisChannelS3TablesDestinationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putS3TablesDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

---

##### `PutStreamConfigurationList` <a name="PutStreamConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putStreamConfigurationList"></a>

```go
func PutStreamConfigurationList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putStreamConfigurationList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetLoggingConfiguration"></a>

```go
func ResetLoggingConfiguration()
```

##### `ResetS3DestinationConfiguration` <a name="ResetS3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3DestinationConfiguration"></a>

```go
func ResetS3DestinationConfiguration()
```

##### `ResetS3TablesDestinationConfiguration` <a name="ResetS3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetS3TablesDestinationConfiguration"></a>

```go
func ResetS3TablesDestinationConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.KinesisChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.KinesisChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.KinesisChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.KinesisChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KinesisChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KinesisChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KinesisChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KinesisChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelArn">ChannelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelCreationTimestamp">ChannelCreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelStatus">ChannelStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference">KinesisChannelEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference">KinesisChannelLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfiguration">S3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference">KinesisChannelS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfiguration">S3TablesDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationList">StreamConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList">KinesisChannelStreamConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList">KinesisChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfigurationInput">S3DestinationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfigurationInput">S3TablesDestinationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationListInput">StreamConfigurationListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelArn`<sup>Required</sup> <a name="ChannelArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelArn"></a>

```go
func ChannelArn() *string
```

- *Type:* *string

---

##### `ChannelCreationTimestamp`<sup>Required</sup> <a name="ChannelCreationTimestamp" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelCreationTimestamp"></a>

```go
func ChannelCreationTimestamp() *string
```

- *Type:* *string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `ChannelStatus`<sup>Required</sup> <a name="ChannelStatus" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelStatus"></a>

```go
func ChannelStatus() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() KinesisChannelEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference">KinesisChannelEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfiguration"></a>

```go
func LoggingConfiguration() KinesisChannelLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference">KinesisChannelLoggingConfigurationOutputReference</a>

---

##### `S3DestinationConfiguration`<sup>Required</sup> <a name="S3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfiguration"></a>

```go
func S3DestinationConfiguration() KinesisChannelS3DestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference">KinesisChannelS3DestinationConfigurationOutputReference</a>

---

##### `S3TablesDestinationConfiguration`<sup>Required</sup> <a name="S3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfiguration"></a>

```go
func S3TablesDestinationConfiguration() KinesisChannelS3TablesDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationOutputReference</a>

---

##### `StreamConfigurationList`<sup>Required</sup> <a name="StreamConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationList"></a>

```go
func StreamConfigurationList() KinesisChannelStreamConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList">KinesisChannelStreamConfigurationListStructList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tags"></a>

```go
func Tags() KinesisChannelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList">KinesisChannelTagsList</a>

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.loggingConfigurationInput"></a>

```go
func LoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `S3DestinationConfigurationInput`<sup>Optional</sup> <a name="S3DestinationConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3DestinationConfigurationInput"></a>

```go
func S3DestinationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `S3TablesDestinationConfigurationInput`<sup>Optional</sup> <a name="S3TablesDestinationConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.s3TablesDestinationConfigurationInput"></a>

```go
func S3TablesDestinationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArnInput"></a>

```go
func ServiceExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `StreamConfigurationListInput`<sup>Optional</sup> <a name="StreamConfigurationListInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.streamConfigurationListInput"></a>

```go
func StreamConfigurationListInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.serviceExecutionRoleArn"></a>

```go
func ServiceExecutionRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisChannelConfig <a name="KinesisChannelConfig" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelName: *string,
	ServiceExecutionRoleArn: *string,
	StreamConfigurationList: interface{},
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelEncryptionConfiguration,
	LoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelLoggingConfiguration,
	S3DestinationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration,
	S3TablesDestinationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | The name of the channel. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.streamConfigurationList">StreamConfigurationList</a></code> | <code>interface{}</code> | List of stream configurations associated with the channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a></code> | Server-side encryption configuration for data at rest. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a></code> | Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3DestinationConfiguration">S3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a></code> | Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3TablesDestinationConfiguration">S3TablesDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a></code> | Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

The name of the channel. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#channel_name KinesisChannel#channel_name}

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.serviceExecutionRoleArn"></a>

```go
ServiceExecutionRoleArn *string
```

- *Type:* *string

The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#service_execution_role_arn KinesisChannel#service_execution_role_arn}

---

##### `StreamConfigurationList`<sup>Required</sup> <a name="StreamConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.streamConfigurationList"></a>

```go
StreamConfigurationList interface{}
```

- *Type:* interface{}

List of stream configurations associated with the channel.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#stream_configuration_list KinesisChannel#stream_configuration_list}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration KinesisChannelEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration">KinesisChannelEncryptionConfiguration</a>

Server-side encryption configuration for data at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#encryption_configuration KinesisChannel#encryption_configuration}

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.loggingConfiguration"></a>

```go
LoggingConfiguration KinesisChannelLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration">KinesisChannelLoggingConfiguration</a>

Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#logging_configuration KinesisChannel#logging_configuration}

---

##### `S3DestinationConfiguration`<sup>Optional</sup> <a name="S3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3DestinationConfiguration"></a>

```go
S3DestinationConfiguration KinesisChannelS3DestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration">KinesisChannelS3DestinationConfiguration</a>

Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#s3_destination_configuration KinesisChannel#s3_destination_configuration}

---

##### `S3TablesDestinationConfiguration`<sup>Optional</sup> <a name="S3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.s3TablesDestinationConfiguration"></a>

```go
S3TablesDestinationConfiguration KinesisChannelS3TablesDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration">KinesisChannelS3TablesDestinationConfiguration</a>

Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#s3_tables_destination_configuration KinesisChannel#s3_tables_destination_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#tags KinesisChannel#tags}

---

### KinesisChannelEncryptionConfiguration <a name="KinesisChannelEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelEncryptionConfiguration {
	EncryptionType: *string,
	KeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | The encryption type. KMS is the only supported value. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.keyId">KeyId</a></code> | <code>*string</code> | The customer-managed AWS KMS key. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

The encryption type. KMS is the only supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#encryption_type KinesisChannel#encryption_type}

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfiguration.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

The customer-managed AWS KMS key.

Accepts a key GUID, key ARN, alias ARN, or alias name prefixed by 'alias/'. The Kinesis Data Streams managed alias 'aws/kinesis' is not accepted - the key must be customer-owned so it can also be used by readers of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#key_id KinesisChannel#key_id}

---

### KinesisChannelLoggingConfiguration <a name="KinesisChannelLoggingConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelLoggingConfiguration {
	CloudwatchLogs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a></code> | CloudWatch Logs configuration block. When provided, controls whether and where the channel writes operational logs. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfiguration.property.cloudwatchLogs"></a>

```go
CloudwatchLogs KinesisChannelLoggingConfigurationCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

CloudWatch Logs configuration block. When provided, controls whether and where the channel writes operational logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#cloudwatch_logs KinesisChannel#cloudwatch_logs}

---

### KinesisChannelLoggingConfigurationCloudwatchLogs <a name="KinesisChannelLoggingConfigurationCloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelLoggingConfigurationCloudwatchLogs {
	Enabled: interface{},
	LogGroupName: *string,
	LogStreamName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether CloudWatch Logs delivery is enabled. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | The CloudWatch log group name. When Enabled is true and LogGroupName is omitted, the service uses the default '/aws/kinesis/<channelName>/<channelId>'. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logStreamName">LogStreamName</a></code> | <code>*string</code> | The CloudWatch log stream name. Defaults to the literal string 'DestinationDelivery' when omitted. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether CloudWatch Logs delivery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#enabled KinesisChannel#enabled}

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

The CloudWatch log group name. When Enabled is true and LogGroupName is omitted, the service uses the default '/aws/kinesis/<channelName>/<channelId>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#log_group_name KinesisChannel#log_group_name}

---

##### `LogStreamName`<sup>Optional</sup> <a name="LogStreamName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs.property.logStreamName"></a>

```go
LogStreamName *string
```

- *Type:* *string

The CloudWatch log stream name. Defaults to the literal string 'DestinationDelivery' when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#log_stream_name KinesisChannel#log_stream_name}

---

### KinesisChannelS3DestinationConfiguration <a name="KinesisChannelS3DestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelS3DestinationConfiguration {
	DataFreshnessInSeconds: *f64,
	DeadLetterQueueS3Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration,
	StorageConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>*f64</code> | The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.deadLetterQueueS3Configuration">DeadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a></code> | Optional dead-letter queue (DLQ) configuration for records that cannot be delivered to the destination. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a></code> | S3 storage configuration including the destination bucket, output key template, storage class, and compression type. |

---

##### `DataFreshnessInSeconds`<sup>Optional</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.dataFreshnessInSeconds"></a>

```go
DataFreshnessInSeconds *f64
```

- *Type:* *f64

The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#data_freshness_in_seconds KinesisChannel#data_freshness_in_seconds}

---

##### `DeadLetterQueueS3Configuration`<sup>Optional</sup> <a name="DeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.deadLetterQueueS3Configuration"></a>

```go
DeadLetterQueueS3Configuration KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

Optional dead-letter queue (DLQ) configuration for records that cannot be delivered to the destination.

When omitted, the service auto-fills using the storage BucketARN with an error prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration KinesisChannel#dead_letter_queue_s3_configuration}

---

##### `StorageConfiguration`<sup>Optional</sup> <a name="StorageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfiguration.property.storageConfiguration"></a>

```go
StorageConfiguration KinesisChannelS3DestinationConfigurationStorageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

S3 storage configuration including the destination bucket, output key template, storage class, and compression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#storage_configuration KinesisChannel#storage_configuration}

---

### KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration <a name="KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration {
	BucketArn: *string,
	ErrorOutputPrefix: *string,
	ExpectedBucketOwner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn">BucketArn</a></code> | <code>*string</code> | The ARN of the S3 bucket for storing failed records. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>*string</code> | Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | The AWS account ID of the expected owner of the dead-letter queue S3 bucket. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

The ARN of the S3 bucket for storing failed records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

##### `ErrorOutputPrefix`<sup>Optional</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix"></a>

```go
ErrorOutputPrefix *string
```

- *Type:* *string

Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#error_output_prefix KinesisChannel#error_output_prefix}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

The AWS account ID of the expected owner of the dead-letter queue S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

### KinesisChannelS3DestinationConfigurationStorageConfiguration <a name="KinesisChannelS3DestinationConfigurationStorageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelS3DestinationConfigurationStorageConfiguration {
	BucketArn: *string,
	CompressionType: *string,
	ExpectedBucketOwner: *string,
	OutputKeyTemplate: *string,
	StorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.bucketArn">BucketArn</a></code> | <code>*string</code> | The ARN of the S3 bucket for record delivery. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.compressionType">CompressionType</a></code> | <code>*string</code> | The compression algorithm applied to delivered objects. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | The AWS account ID of the expected owner of the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.outputKeyTemplate">OutputKeyTemplate</a></code> | <code>*string</code> | Optional template for the S3 object key path. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.storageClass">StorageClass</a></code> | <code>*string</code> | The S3 storage class for delivered objects. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

The ARN of the S3 bucket for record delivery.

Different channels can deliver to the same bucket. Buckets can be cross-account but must be in the same region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

The compression algorithm applied to delivered objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#compression_type KinesisChannel#compression_type}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

The AWS account ID of the expected owner of the destination S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

##### `OutputKeyTemplate`<sup>Optional</sup> <a name="OutputKeyTemplate" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.outputKeyTemplate"></a>

```go
OutputKeyTemplate *string
```

- *Type:* *string

Optional template for the S3 object key path.

Supports placeholders in the form !{name}: !{channel-name}, !{channel-id}, !{stream-name}, !{yyyy}, !{yy}, !{MM}, !{dd}, !{HH}, !{mm}, and !{extension} (a literal file extension can be supplied as !{extension:.json.gz}). When omitted, the service uses the default 'kinesis-channel/!{channel-name}/!{channel-id}/!{yyyy}/!{MM}/!{dd}/!{HH}/!{channel-name}-!{channel-id}-!{yyyy}-!{MM}-!{dd}-!{HH}-!{mm}!{extension}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#output_key_template KinesisChannel#output_key_template}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The S3 storage class for delivered objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#storage_class KinesisChannel#storage_class}

---

### KinesisChannelS3TablesDestinationConfiguration <a name="KinesisChannelS3TablesDestinationConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelS3TablesDestinationConfiguration {
	DataFreshnessInSeconds: *f64,
	DeadLetterQueueS3Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration,
	S3TablesConfigurationList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>*f64</code> | The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.deadLetterQueueS3Configuration">DeadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a></code> | The dead-letter queue (DLQ) configuration for records that cannot be delivered to the S3 Tables destination. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.s3TablesConfigurationList">S3TablesConfigurationList</a></code> | <code>interface{}</code> | The list of S3 Tables destinations. |

---

##### `DataFreshnessInSeconds`<sup>Optional</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.dataFreshnessInSeconds"></a>

```go
DataFreshnessInSeconds *f64
```

- *Type:* *f64

The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#data_freshness_in_seconds KinesisChannel#data_freshness_in_seconds}

---

##### `DeadLetterQueueS3Configuration`<sup>Optional</sup> <a name="DeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.deadLetterQueueS3Configuration"></a>

```go
DeadLetterQueueS3Configuration KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

The dead-letter queue (DLQ) configuration for records that cannot be delivered to the S3 Tables destination.

Required for S3 Tables: there is no safe fallback because S3 Tables metadata writes are critical-path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration KinesisChannel#dead_letter_queue_s3_configuration}

---

##### `S3TablesConfigurationList`<sup>Optional</sup> <a name="S3TablesConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfiguration.property.s3TablesConfigurationList"></a>

```go
S3TablesConfigurationList interface{}
```

- *Type:* interface{}

The list of S3 Tables destinations.

v1 supports a single element; the list shape allows future extensibility to fan out to multiple tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#s3_tables_configuration_list KinesisChannel#s3_tables_configuration_list}

---

### KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration <a name="KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration {
	BucketArn: *string,
	ErrorOutputPrefix: *string,
	ExpectedBucketOwner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn">BucketArn</a></code> | <code>*string</code> | The ARN of the S3 bucket for storing failed records. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>*string</code> | Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | The AWS account ID of the expected owner of the dead-letter queue S3 bucket. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

The ARN of the S3 bucket for storing failed records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#bucket_arn KinesisChannel#bucket_arn}

---

##### `ErrorOutputPrefix`<sup>Optional</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.errorOutputPrefix"></a>

```go
ErrorOutputPrefix *string
```

- *Type:* *string

Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#error_output_prefix KinesisChannel#error_output_prefix}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

The AWS account ID of the expected owner of the dead-letter queue S3 bucket.

Used to verify bucket ownership before delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#expected_bucket_owner KinesisChannel#expected_bucket_owner}

---

### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec {
	PartitionFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.property.partitionFields">PartitionFields</a></code> | <code>interface{}</code> | List of partition fields that define how records are partitioned when written to the destination table. |

---

##### `PartitionFields`<sup>Optional</sup> <a name="PartitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec.property.partitionFields"></a>

```go
PartitionFields interface{}
```

- *Type:* interface{}

List of partition fields that define how records are partitioned when written to the destination table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#partition_fields KinesisChannel#partition_fields}

---

### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields {
	SourceName: *string,
	Transform: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.sourceName">SourceName</a></code> | <code>*string</code> | The name of the source column on which the transform is applied. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.transform">Transform</a></code> | <code>*string</code> | The partitioning transform applied to the SourceName column. |

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

The name of the source column on which the transform is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#source_name KinesisChannel#source_name}

---

##### `Transform`<sup>Optional</sup> <a name="Transform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFields.property.transform"></a>

```go
Transform *string
```

- *Type:* *string

The partitioning transform applied to the SourceName column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#transform KinesisChannel#transform}

---

### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct {
	CompressionType: *string,
	Namespace: *string,
	PartitionSpec: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec,
	TableBucketArn: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.compressionType">CompressionType</a></code> | <code>*string</code> | The compression algorithm applied to objects delivered to the S3 Tables destination. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.namespace">Namespace</a></code> | <code>*string</code> | The name of the S3 Tables namespace that contains the destination table. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a></code> | The partition specification used by the destination Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableBucketArn">TableBucketArn</a></code> | <code>*string</code> | The ARN of the S3 Tables table bucket for record delivery. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableName">TableName</a></code> | <code>*string</code> | The name of the destination S3 Tables table. |

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

The compression algorithm applied to objects delivered to the S3 Tables destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#compression_type KinesisChannel#compression_type}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The name of the S3 Tables namespace that contains the destination table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#namespace KinesisChannel#namespace}

---

##### `PartitionSpec`<sup>Optional</sup> <a name="PartitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.partitionSpec"></a>

```go
PartitionSpec KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

The partition specification used by the destination Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#partition_spec KinesisChannel#partition_spec}

---

##### `TableBucketArn`<sup>Optional</sup> <a name="TableBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableBucketArn"></a>

```go
TableBucketArn *string
```

- *Type:* *string

The ARN of the S3 Tables table bucket for record delivery.

Buckets can be cross-account but must be in the same region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#table_bucket_arn KinesisChannel#table_bucket_arn}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStruct.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the destination S3 Tables table.

The table is created for the customer if it does not yet exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#table_name KinesisChannel#table_name}

---

### KinesisChannelStreamConfigurationListRecordConfiguration <a name="KinesisChannelStreamConfigurationListRecordConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelStreamConfigurationListRecordConfiguration {
	RecordFormatType: *string,
	GsrSchemaArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.recordFormatType">RecordFormatType</a></code> | <code>*string</code> | The format used to interpret records read from the source stream. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.gsrSchemaArn">GsrSchemaArn</a></code> | <code>*string</code> | The ARN of the AWS Glue Schema Registry (GSR) schema. |

---

##### `RecordFormatType`<sup>Required</sup> <a name="RecordFormatType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.recordFormatType"></a>

```go
RecordFormatType *string
```

- *Type:* *string

The format used to interpret records read from the source stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#record_format_type KinesisChannel#record_format_type}

---

##### `GsrSchemaArn`<sup>Optional</sup> <a name="GsrSchemaArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration.property.gsrSchemaArn"></a>

```go
GsrSchemaArn *string
```

- *Type:* *string

The ARN of the AWS Glue Schema Registry (GSR) schema.

Required for the S3 Tables destination, where it is used to create the S3 Table and to validate that the record format matches the table schema. Also used when RecordFormatType is GSR_JSON to interpret records read from the source stream. Vanilla S3 delivery writes records as S3 objects and does not need a schema. The schema must be in the same account and region as the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#gsr_schema_arn KinesisChannel#gsr_schema_arn}

---

### KinesisChannelStreamConfigurationListStruct <a name="KinesisChannelStreamConfigurationListStruct" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelStreamConfigurationListStruct {
	RecordConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration,
	StreamArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.recordConfiguration">RecordConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a></code> | The configuration that describes how records on the source stream are encoded. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.streamArn">StreamArn</a></code> | <code>*string</code> | The Amazon resource name (ARN) of the Kinesis data stream that the channel reads from. |

---

##### `RecordConfiguration`<sup>Required</sup> <a name="RecordConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.recordConfiguration"></a>

```go
RecordConfiguration KinesisChannelStreamConfigurationListRecordConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a>

The configuration that describes how records on the source stream are encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#record_configuration KinesisChannel#record_configuration}

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStruct.property.streamArn"></a>

```go
StreamArn *string
```

- *Type:* *string

The Amazon resource name (ARN) of the Kinesis data stream that the channel reads from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#stream_arn KinesisChannel#stream_arn}

---

### KinesisChannelTags <a name="KinesisChannelTags" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

&kinesischannel.KinesisChannelTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#key KinesisChannel#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#value KinesisChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisChannelEncryptionConfigurationOutputReference <a name="KinesisChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.resetKeyId"></a>

```go
func ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference <a name="KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelLoggingConfigurationCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogStreamName">ResetLogStreamName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogGroupName"></a>

```go
func ResetLogGroupName()
```

##### `ResetLogStreamName` <a name="ResetLogStreamName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.resetLogStreamName"></a>

```go
func ResetLogStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamNameInput">LogStreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName">LogStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `LogStreamNameInput`<sup>Optional</sup> <a name="LogStreamNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamNameInput"></a>

```go
func LogStreamNameInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `LogStreamName`<sup>Required</sup> <a name="LogStreamName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.logStreamName"></a>

```go
func LogStreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelLoggingConfigurationOutputReference <a name="KinesisChannelLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value KinesisChannelLoggingConfigurationCloudwatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogs">KinesisChannelLoggingConfigurationCloudwatchLogs</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference">KinesisChannelLoggingConfigurationCloudwatchLogsOutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix">ResetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn"></a>

```go
func ResetBucketArn()
```

##### `ResetErrorOutputPrefix` <a name="ResetErrorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix"></a>

```go
func ResetErrorOutputPrefix()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput">ErrorOutputPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `ErrorOutputPrefixInput`<sup>Optional</sup> <a name="ErrorOutputPrefixInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput"></a>

```go
func ErrorOutputPrefixInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `ErrorOutputPrefix`<sup>Required</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```go
func ErrorOutputPrefix() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3DestinationConfigurationOutputReference <a name="KinesisChannelS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3DestinationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelS3DestinationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration">PutDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration">PutStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds">ResetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration">ResetDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetStorageConfiguration">ResetStorageConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeadLetterQueueS3Configuration` <a name="PutDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration"></a>

```go
func PutDeadLetterQueueS3Configuration(value KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3Configuration</a>

---

##### `PutStorageConfiguration` <a name="PutStorageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration"></a>

```go
func PutStorageConfiguration(value KinesisChannelS3DestinationConfigurationStorageConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.putStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfiguration">KinesisChannelS3DestinationConfigurationStorageConfiguration</a>

---

##### `ResetDataFreshnessInSeconds` <a name="ResetDataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```go
func ResetDataFreshnessInSeconds()
```

##### `ResetDeadLetterQueueS3Configuration` <a name="ResetDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration"></a>

```go
func ResetDeadLetterQueueS3Configuration()
```

##### `ResetStorageConfiguration` <a name="ResetStorageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.resetStorageConfiguration"></a>

```go
func ResetStorageConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">DeadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">DataFreshnessInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput">DeadLetterQueueS3ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfigurationInput">StorageConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeadLetterQueueS3Configuration`<sup>Required</sup> <a name="DeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```go
func DeadLetterQueueS3Configuration() KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `StorageConfiguration`<sup>Required</sup> <a name="StorageConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfiguration"></a>

```go
func StorageConfiguration() KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference">KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference</a>

---

##### `DataFreshnessInSecondsInput`<sup>Optional</sup> <a name="DataFreshnessInSecondsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```go
func DataFreshnessInSecondsInput() *f64
```

- *Type:* *f64

---

##### `DeadLetterQueueS3ConfigurationInput`<sup>Optional</sup> <a name="DeadLetterQueueS3ConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput"></a>

```go
func DeadLetterQueueS3ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `StorageConfigurationInput`<sup>Optional</sup> <a name="StorageConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.storageConfigurationInput"></a>

```go
func StorageConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DataFreshnessInSeconds`<sup>Required</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```go
func DataFreshnessInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference <a name="KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetOutputKeyTemplate">ResetOutputKeyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetBucketArn"></a>

```go
func ResetBucketArn()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetCompressionType"></a>

```go
func ResetCompressionType()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetOutputKeyTemplate` <a name="ResetOutputKeyTemplate" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetOutputKeyTemplate"></a>

```go
func ResetOutputKeyTemplate()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.resetStorageClass"></a>

```go
func ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplateInput">OutputKeyTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate">OutputKeyTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `OutputKeyTemplateInput`<sup>Optional</sup> <a name="OutputKeyTemplateInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplateInput"></a>

```go
func OutputKeyTemplateInput() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `OutputKeyTemplate`<sup>Required</sup> <a name="OutputKeyTemplate" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.outputKeyTemplate"></a>

```go
func OutputKeyTemplate() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3DestinationConfigurationStorageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix">ResetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetBucketArn"></a>

```go
func ResetBucketArn()
```

##### `ResetErrorOutputPrefix` <a name="ResetErrorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetErrorOutputPrefix"></a>

```go
func ResetErrorOutputPrefix()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput">ErrorOutputPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `ErrorOutputPrefixInput`<sup>Optional</sup> <a name="ErrorOutputPrefixInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefixInput"></a>

```go
func ErrorOutputPrefixInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `ErrorOutputPrefix`<sup>Required</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.errorOutputPrefix"></a>

```go
func ErrorOutputPrefix() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3TablesDestinationConfigurationOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3TablesDestinationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelS3TablesDestinationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration">PutDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putS3TablesConfigurationList">PutS3TablesConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDataFreshnessInSeconds">ResetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration">ResetDeadLetterQueueS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetS3TablesConfigurationList">ResetS3TablesConfigurationList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeadLetterQueueS3Configuration` <a name="PutDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration"></a>

```go
func PutDeadLetterQueueS3Configuration(value KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putDeadLetterQueueS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3Configuration</a>

---

##### `PutS3TablesConfigurationList` <a name="PutS3TablesConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putS3TablesConfigurationList"></a>

```go
func PutS3TablesConfigurationList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.putS3TablesConfigurationList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataFreshnessInSeconds` <a name="ResetDataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDataFreshnessInSeconds"></a>

```go
func ResetDataFreshnessInSeconds()
```

##### `ResetDeadLetterQueueS3Configuration` <a name="ResetDeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetDeadLetterQueueS3Configuration"></a>

```go
func ResetDeadLetterQueueS3Configuration()
```

##### `ResetS3TablesConfigurationList` <a name="ResetS3TablesConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.resetS3TablesConfigurationList"></a>

```go
func ResetS3TablesConfigurationList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration">DeadLetterQueueS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList">S3TablesConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput">DataFreshnessInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput">DeadLetterQueueS3ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationListInput">S3TablesConfigurationListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeadLetterQueueS3Configuration`<sup>Required</sup> <a name="DeadLetterQueueS3Configuration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3Configuration"></a>

```go
func DeadLetterQueueS3Configuration() KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference">KinesisChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationOutputReference</a>

---

##### `S3TablesConfigurationList`<sup>Required</sup> <a name="S3TablesConfigurationList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationList"></a>

```go
func S3TablesConfigurationList() KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList</a>

---

##### `DataFreshnessInSecondsInput`<sup>Optional</sup> <a name="DataFreshnessInSecondsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSecondsInput"></a>

```go
func DataFreshnessInSecondsInput() *f64
```

- *Type:* *f64

---

##### `DeadLetterQueueS3ConfigurationInput`<sup>Optional</sup> <a name="DeadLetterQueueS3ConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.deadLetterQueueS3ConfigurationInput"></a>

```go
func DeadLetterQueueS3ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `S3TablesConfigurationListInput`<sup>Optional</sup> <a name="S3TablesConfigurationListInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.s3TablesConfigurationListInput"></a>

```go
func S3TablesConfigurationListInput() interface{}
```

- *Type:* interface{}

---

##### `DataFreshnessInSeconds`<sup>Required</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.dataFreshnessInSeconds"></a>

```go
func DataFreshnessInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.putPartitionFields">PutPartitionFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resetPartitionFields">ResetPartitionFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitionFields` <a name="PutPartitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.putPartitionFields"></a>

```go
func PutPartitionFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.putPartitionFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPartitionFields` <a name="ResetPartitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.resetPartitionFields"></a>

```go
func ResetPartitionFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields">PartitionFields</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFieldsInput">PartitionFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionFields`<sup>Required</sup> <a name="PartitionFields" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFields"></a>

```go
func PartitionFields() KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList</a>

---

##### `PartitionFieldsInput`<sup>Optional</sup> <a name="PartitionFieldsInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.partitionFieldsInput"></a>

```go
func PartitionFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get"></a>

```go
func Get(index *f64) KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetTransform">ResetTransform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetSourceName"></a>

```go
func ResetSourceName()
```

##### `ResetTransform` <a name="ResetTransform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.resetTransform"></a>

```go
func ResetTransform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transformInput">TransformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transformInput"></a>

```go
func TransformInput() *string
```

- *Type:* *string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecPartitionFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get"></a>

```go
func Get(index *f64) KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference <a name="KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.putPartitionSpec">PutPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetPartitionSpec">ResetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableBucketArn">ResetTableBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitionSpec` <a name="PutPartitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.putPartitionSpec"></a>

```go
func PutPartitionSpec(value KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpec</a>

---

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetCompressionType"></a>

```go
func ResetCompressionType()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartitionSpec` <a name="ResetPartitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetPartitionSpec"></a>

```go
func ResetPartitionSpec()
```

##### `ResetTableBucketArn` <a name="ResetTableBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableBucketArn"></a>

```go
func ResetTableBucketArn()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpecInput">PartitionSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArnInput">TableBucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn">TableBucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionSpec`<sup>Required</sup> <a name="PartitionSpec" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpec"></a>

```go
func PartitionSpec() KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference">KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListPartitionSpecOutputReference</a>

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionSpecInput`<sup>Optional</sup> <a name="PartitionSpecInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.partitionSpecInput"></a>

```go
func PartitionSpecInput() interface{}
```

- *Type:* interface{}

---

##### `TableBucketArnInput`<sup>Optional</sup> <a name="TableBucketArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArnInput"></a>

```go
func TableBucketArnInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableBucketArn"></a>

```go
func TableBucketArn() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelS3TablesDestinationConfigurationS3TablesConfigurationListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelStreamConfigurationListRecordConfigurationOutputReference <a name="KinesisChannelStreamConfigurationListRecordConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelStreamConfigurationListRecordConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisChannelStreamConfigurationListRecordConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resetGsrSchemaArn">ResetGsrSchemaArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGsrSchemaArn` <a name="ResetGsrSchemaArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.resetGsrSchemaArn"></a>

```go
func ResetGsrSchemaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArnInput">GsrSchemaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatTypeInput">RecordFormatTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn">GsrSchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType">RecordFormatType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GsrSchemaArnInput`<sup>Optional</sup> <a name="GsrSchemaArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArnInput"></a>

```go
func GsrSchemaArnInput() *string
```

- *Type:* *string

---

##### `RecordFormatTypeInput`<sup>Optional</sup> <a name="RecordFormatTypeInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatTypeInput"></a>

```go
func RecordFormatTypeInput() *string
```

- *Type:* *string

---

##### `GsrSchemaArn`<sup>Required</sup> <a name="GsrSchemaArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.gsrSchemaArn"></a>

```go
func GsrSchemaArn() *string
```

- *Type:* *string

---

##### `RecordFormatType`<sup>Required</sup> <a name="RecordFormatType" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.recordFormatType"></a>

```go
func RecordFormatType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelStreamConfigurationListStructList <a name="KinesisChannelStreamConfigurationListStructList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelStreamConfigurationListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KinesisChannelStreamConfigurationListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.get"></a>

```go
func Get(index *f64) KinesisChannelStreamConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelStreamConfigurationListStructOutputReference <a name="KinesisChannelStreamConfigurationListStructOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelStreamConfigurationListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KinesisChannelStreamConfigurationListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration">PutRecordConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordConfiguration` <a name="PutRecordConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration"></a>

```go
func PutRecordConfiguration(value KinesisChannelStreamConfigurationListRecordConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.putRecordConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfiguration">KinesisChannelStreamConfigurationListRecordConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration">RecordConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference">KinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfigurationInput">RecordConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordConfiguration`<sup>Required</sup> <a name="RecordConfiguration" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfiguration"></a>

```go
func RecordConfiguration() KinesisChannelStreamConfigurationListRecordConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListRecordConfigurationOutputReference">KinesisChannelStreamConfigurationListRecordConfigurationOutputReference</a>

---

##### `RecordConfigurationInput`<sup>Optional</sup> <a name="RecordConfigurationInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.recordConfigurationInput"></a>

```go
func RecordConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArnInput"></a>

```go
func StreamArnInput() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelStreamConfigurationListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelTagsList <a name="KinesisChannelTagsList" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KinesisChannelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.get"></a>

```go
func Get(index *f64) KinesisChannelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisChannelTagsOutputReference <a name="KinesisChannelTagsOutputReference" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kinesischannel"

kinesischannel.NewKinesisChannelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KinesisChannelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisChannel.KinesisChannelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



