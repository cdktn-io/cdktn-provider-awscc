# `iotCommand` Submodule <a name="`iotCommand` Submodule" id="@cdktn/provider-awscc.iotCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCommand <a name="IotCommand" id="@cdktn/provider-awscc.iotCommand.IotCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command awscc_iot_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommand(scope Construct, id *string, config IotCommandConfig) IotCommand
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig">IotCommandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig">IotCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters">PutMandatoryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPayload">PutPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor">PutPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated">ResetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt">ResetLastUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters">ResetMandatoryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate">ResetPayloadTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion">ResetPendingDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor">ResetPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommand.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotCommand.IotCommand.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotCommand.IotCommand.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMandatoryParameters` <a name="PutMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters"></a>

```go
func PutMandatoryParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPayload` <a name="PutPayload" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload"></a>

```go
func PutPayload(value IotCommandPayload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---

##### `PutPreprocessor` <a name="PutPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor"></a>

```go
func PutPreprocessor(value IotCommandPreprocessor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetDeprecated` <a name="ResetDeprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated"></a>

```go
func ResetDeprecated()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetLastUpdatedAt` <a name="ResetLastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt"></a>

```go
func ResetLastUpdatedAt()
```

##### `ResetMandatoryParameters` <a name="ResetMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters"></a>

```go
func ResetMandatoryParameters()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetPayloadTemplate` <a name="ResetPayloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate"></a>

```go
func ResetPayloadTemplate()
```

##### `ResetPendingDeletion` <a name="ResetPendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion"></a>

```go
func ResetPendingDeletion()
```

##### `ResetPreprocessor` <a name="ResetPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor"></a>

```go
func ResetPreprocessor()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.IotCommand_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.IotCommand_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.IotCommand_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.IotCommand_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotCommand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn">CommandArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters">MandatoryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor">Preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput">CommandIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput">CreatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput">DeprecatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput">LastUpdatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput">MandatoryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput">PayloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput">PayloadTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput">PendingDeletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput">PreprocessorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId">CommandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated">Deprecated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate">PayloadTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion">PendingDeletion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommandArn`<sup>Required</sup> <a name="CommandArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn"></a>

```go
func CommandArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MandatoryParameters`<sup>Required</sup> <a name="MandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters"></a>

```go
func MandatoryParameters() IotCommandMandatoryParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a>

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payload"></a>

```go
func Payload() IotCommandPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a>

---

##### `Preprocessor`<sup>Required</sup> <a name="Preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor"></a>

```go
func Preprocessor() IotCommandPreprocessorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tags"></a>

```go
func Tags() IotCommandTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a>

---

##### `CommandIdInput`<sup>Optional</sup> <a name="CommandIdInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput"></a>

```go
func CommandIdInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput"></a>

```go
func CreatedAtInput() *string
```

- *Type:* *string

---

##### `DeprecatedInput`<sup>Optional</sup> <a name="DeprecatedInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput"></a>

```go
func DeprecatedInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `LastUpdatedAtInput`<sup>Optional</sup> <a name="LastUpdatedAtInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput"></a>

```go
func LastUpdatedAtInput() *string
```

- *Type:* *string

---

##### `MandatoryParametersInput`<sup>Optional</sup> <a name="MandatoryParametersInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput"></a>

```go
func MandatoryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput"></a>

```go
func PayloadInput() interface{}
```

- *Type:* interface{}

---

##### `PayloadTemplateInput`<sup>Optional</sup> <a name="PayloadTemplateInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput"></a>

```go
func PayloadTemplateInput() *string
```

- *Type:* *string

---

##### `PendingDeletionInput`<sup>Optional</sup> <a name="PendingDeletionInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput"></a>

```go
func PendingDeletionInput() interface{}
```

- *Type:* interface{}

---

##### `PreprocessorInput`<sup>Optional</sup> <a name="PreprocessorInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput"></a>

```go
func PreprocessorInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `CommandId`<sup>Required</sup> <a name="CommandId" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId"></a>

```go
func CommandId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated"></a>

```go
func Deprecated() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PayloadTemplate`<sup>Required</sup> <a name="PayloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate"></a>

```go
func PayloadTemplate() *string
```

- *Type:* *string

---

##### `PendingDeletion`<sup>Required</sup> <a name="PendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion"></a>

```go
func PendingDeletion() interface{}
```

- *Type:* interface{}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotCommandConfig <a name="IotCommandConfig" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CommandId: *string,
	CreatedAt: *string,
	Deprecated: interface{},
	Description: *string,
	DisplayName: *string,
	LastUpdatedAt: *string,
	MandatoryParameters: interface{},
	Namespace: *string,
	Payload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotCommand.IotCommandPayload,
	PayloadTemplate: *string,
	PendingDeletion: interface{},
	Preprocessor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotCommand.IotCommandPreprocessor,
	RoleArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId">CommandId</a></code> | <code>*string</code> | The unique identifier for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | The date and time when the command was created. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated">Deprecated</a></code> | <code>interface{}</code> | A flag indicating whether the command is deprecated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description">Description</a></code> | <code>*string</code> | The description of the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | The date and time when the command was last updated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters">MandatoryParameters</a></code> | <code>interface{}</code> | The list of mandatory parameters for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace to which the command belongs. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | The payload associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate">PayloadTemplate</a></code> | <code>*string</code> | The payload template associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion">PendingDeletion</a></code> | <code>interface{}</code> | A flag indicating whether the command is pending deletion. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor">Preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | The command preprocessor configuration. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The customer role associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to be associated with the command. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommandId`<sup>Required</sup> <a name="CommandId" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId"></a>

```go
CommandId *string
```

- *Type:* *string

The unique identifier for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#command_id IotCommand#command_id}

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt"></a>

```go
CreatedAt *string
```

- *Type:* *string

The date and time when the command was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#created_at IotCommand#created_at}

---

##### `Deprecated`<sup>Optional</sup> <a name="Deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated"></a>

```go
Deprecated interface{}
```

- *Type:* interface{}

A flag indicating whether the command is deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#deprecated IotCommand#deprecated}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#description IotCommand#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#display_name IotCommand#display_name}

---

##### `LastUpdatedAt`<sup>Optional</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt"></a>

```go
LastUpdatedAt *string
```

- *Type:* *string

The date and time when the command was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#last_updated_at IotCommand#last_updated_at}

---

##### `MandatoryParameters`<sup>Optional</sup> <a name="MandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters"></a>

```go
MandatoryParameters interface{}
```

- *Type:* interface{}

The list of mandatory parameters for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#mandatory_parameters IotCommand#mandatory_parameters}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace to which the command belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#namespace IotCommand#namespace}

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload"></a>

```go
Payload IotCommandPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

The payload associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#payload IotCommand#payload}

---

##### `PayloadTemplate`<sup>Optional</sup> <a name="PayloadTemplate" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate"></a>

```go
PayloadTemplate *string
```

- *Type:* *string

The payload template associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#payload_template IotCommand#payload_template}

---

##### `PendingDeletion`<sup>Optional</sup> <a name="PendingDeletion" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion"></a>

```go
PendingDeletion interface{}
```

- *Type:* interface{}

A flag indicating whether the command is pending deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#pending_deletion IotCommand#pending_deletion}

---

##### `Preprocessor`<sup>Optional</sup> <a name="Preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor"></a>

```go
Preprocessor IotCommandPreprocessor
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

The command preprocessor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#preprocessor IotCommand#preprocessor}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The customer role associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#role_arn IotCommand#role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to be associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#tags IotCommand#tags}

---

### IotCommandMandatoryParameters <a name="IotCommandMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandMandatoryParameters {
	DefaultValue: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotCommand.IotCommandMandatoryParametersDefaultValue,
	Description: *string,
	Name: *string,
	Type: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotCommand.IotCommandMandatoryParametersValue,
	ValueConditions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#default_value IotCommand#default_value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#description IotCommand#description}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#name IotCommand#name}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#type IotCommand#type}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#value IotCommand#value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions">ValueConditions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}. |

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue"></a>

```go
DefaultValue IotCommandMandatoryParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#default_value IotCommand#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#description IotCommand#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#name IotCommand#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#type IotCommand#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value"></a>

```go
Value IotCommandMandatoryParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#value IotCommand#value}.

---

##### `ValueConditions`<sup>Optional</sup> <a name="ValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions"></a>

```go
ValueConditions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}.

---

### IotCommandMandatoryParametersDefaultValue <a name="IotCommandMandatoryParametersDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandMandatoryParametersDefaultValue {
	B: interface{},
	Bin: *string,
	D: *f64,
	I: *f64,
	L: *string,
	S: *string,
	Ul: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b">B</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin">Bin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d">D</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i">I</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l">L</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s">S</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul">Ul</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `B`<sup>Optional</sup> <a name="B" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b"></a>

```go
B interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `Bin`<sup>Optional</sup> <a name="Bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin"></a>

```go
Bin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `D`<sup>Optional</sup> <a name="D" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d"></a>

```go
D *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `I`<sup>Optional</sup> <a name="I" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i"></a>

```go
I *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `L`<sup>Optional</sup> <a name="L" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l"></a>

```go
L *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `S`<sup>Optional</sup> <a name="S" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s"></a>

```go
S *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `Ul`<sup>Optional</sup> <a name="Ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul"></a>

```go
Ul *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValue <a name="IotCommandMandatoryParametersValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandMandatoryParametersValue {
	B: interface{},
	Bin: *string,
	D: *f64,
	I: *f64,
	L: *string,
	S: *string,
	Ul: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b">B</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin">Bin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d">D</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i">I</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l">L</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s">S</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul">Ul</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `B`<sup>Optional</sup> <a name="B" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b"></a>

```go
B interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `Bin`<sup>Optional</sup> <a name="Bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin"></a>

```go
Bin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `D`<sup>Optional</sup> <a name="D" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d"></a>

```go
D *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `I`<sup>Optional</sup> <a name="I" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i"></a>

```go
I *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `L`<sup>Optional</sup> <a name="L" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l"></a>

```go
L *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `S`<sup>Optional</sup> <a name="S" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s"></a>

```go
S *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `Ul`<sup>Optional</sup> <a name="Ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul"></a>

```go
Ul *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValueConditions <a name="IotCommandMandatoryParametersValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandMandatoryParametersValueConditions {
	ComparisonOperator: *string,
	Operand: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand">Operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#operand IotCommand#operand}. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}.

---

##### `Operand`<sup>Optional</sup> <a name="Operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand"></a>

```go
Operand IotCommandMandatoryParametersValueConditionsOperand
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#operand IotCommand#operand}.

---

### IotCommandMandatoryParametersValueConditionsOperand <a name="IotCommandMandatoryParametersValueConditionsOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandMandatoryParametersValueConditionsOperand {
	Number: *string,
	NumberRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange,
	Numbers: *[]*string,
	String: *string,
	Strings: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number">Number</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#number IotCommand#number}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange">NumberRange</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#number_range IotCommand#number_range}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers">Numbers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#numbers IotCommand#numbers}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string">String</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#string IotCommand#string}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings">Strings</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#strings IotCommand#strings}. |

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number"></a>

```go
Number *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#number IotCommand#number}.

---

##### `NumberRange`<sup>Optional</sup> <a name="NumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange"></a>

```go
NumberRange IotCommandMandatoryParametersValueConditionsOperandNumberRange
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#number_range IotCommand#number_range}.

---

##### `Numbers`<sup>Optional</sup> <a name="Numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers"></a>

```go
Numbers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#numbers IotCommand#numbers}.

---

##### `String`<sup>Optional</sup> <a name="String" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string"></a>

```go
String *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#string IotCommand#string}.

---

##### `Strings`<sup>Optional</sup> <a name="Strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings"></a>

```go
Strings *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#strings IotCommand#strings}.

---

### IotCommandMandatoryParametersValueConditionsOperandNumberRange <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange {
	Max: *string,
	Min: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max">Max</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#max IotCommand#max}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min">Min</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#min IotCommand#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max"></a>

```go
Max *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#max IotCommand#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min"></a>

```go
Min *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#min IotCommand#min}.

---

### IotCommandPayload <a name="IotCommandPayload" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandPayload {
	Content: *string,
	ContentType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#content IotCommand#content}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#content_type IotCommand#content_type}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#content IotCommand#content}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#content_type IotCommand#content_type}.

---

### IotCommandPreprocessor <a name="IotCommandPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandPreprocessor {
	AwsJsonSubstitution: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution">AwsJsonSubstitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}. |

---

##### `AwsJsonSubstitution`<sup>Optional</sup> <a name="AwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution"></a>

```go
AwsJsonSubstitution IotCommandPreprocessorAwsJsonSubstitution
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}.

---

### IotCommandPreprocessorAwsJsonSubstitution <a name="IotCommandPreprocessorAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandPreprocessorAwsJsonSubstitution {
	OutputFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#output_format IotCommand#output_format}. |

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#output_format IotCommand#output_format}.

---

### IotCommandTags <a name="IotCommandTags" id="@cdktn/provider-awscc.iotCommand.IotCommandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

&iotcommand.IotCommandTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key">Key</a></code> | <code>*string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value">Value</a></code> | <code>*string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#key IotCommand#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_command#value IotCommand#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotCommandMandatoryParametersDefaultValueOutputReference <a name="IotCommandMandatoryParametersDefaultValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandMandatoryParametersDefaultValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotCommandMandatoryParametersDefaultValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB">ResetB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin">ResetBin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD">ResetD</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI">ResetI</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL">ResetL</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS">ResetS</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl">ResetUl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetB` <a name="ResetB" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB"></a>

```go
func ResetB()
```

##### `ResetBin` <a name="ResetBin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin"></a>

```go
func ResetBin()
```

##### `ResetD` <a name="ResetD" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD"></a>

```go
func ResetD()
```

##### `ResetI` <a name="ResetI" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI"></a>

```go
func ResetI()
```

##### `ResetL` <a name="ResetL" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL"></a>

```go
func ResetL()
```

##### `ResetS` <a name="ResetS" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS"></a>

```go
func ResetS()
```

##### `ResetUl` <a name="ResetUl" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl"></a>

```go
func ResetUl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput">BinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput">BInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput">DInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput">IInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput">LInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput">SInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput">UlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b">B</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin">Bin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d">D</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i">I</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l">L</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s">S</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul">Ul</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinInput`<sup>Optional</sup> <a name="BinInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput"></a>

```go
func BinInput() *string
```

- *Type:* *string

---

##### `BInput`<sup>Optional</sup> <a name="BInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput"></a>

```go
func BInput() interface{}
```

- *Type:* interface{}

---

##### `DInput`<sup>Optional</sup> <a name="DInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput"></a>

```go
func DInput() *f64
```

- *Type:* *f64

---

##### `IInput`<sup>Optional</sup> <a name="IInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput"></a>

```go
func IInput() *f64
```

- *Type:* *f64

---

##### `LInput`<sup>Optional</sup> <a name="LInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput"></a>

```go
func LInput() *string
```

- *Type:* *string

---

##### `SInput`<sup>Optional</sup> <a name="SInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput"></a>

```go
func SInput() *string
```

- *Type:* *string

---

##### `UlInput`<sup>Optional</sup> <a name="UlInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput"></a>

```go
func UlInput() *string
```

- *Type:* *string

---

##### `B`<sup>Required</sup> <a name="B" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b"></a>

```go
func B() interface{}
```

- *Type:* interface{}

---

##### `Bin`<sup>Required</sup> <a name="Bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin"></a>

```go
func Bin() *string
```

- *Type:* *string

---

##### `D`<sup>Required</sup> <a name="D" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d"></a>

```go
func D() *f64
```

- *Type:* *f64

---

##### `I`<sup>Required</sup> <a name="I" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i"></a>

```go
func I() *f64
```

- *Type:* *f64

---

##### `L`<sup>Required</sup> <a name="L" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l"></a>

```go
func L() *string
```

- *Type:* *string

---

##### `S`<sup>Required</sup> <a name="S" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s"></a>

```go
func S() *string
```

- *Type:* *string

---

##### `Ul`<sup>Required</sup> <a name="Ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul"></a>

```go
func Ul() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandMandatoryParametersList <a name="IotCommandMandatoryParametersList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandMandatoryParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotCommandMandatoryParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get"></a>

```go
func Get(index *f64) IotCommandMandatoryParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandMandatoryParametersOutputReference <a name="IotCommandMandatoryParametersOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandMandatoryParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotCommandMandatoryParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions">PutValueConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions">ResetValueConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue"></a>

```go
func PutDefaultValue(value IotCommandMandatoryParametersDefaultValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue"></a>

```go
func PutValue(value IotCommandMandatoryParametersValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---

##### `PutValueConditions` <a name="PutValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions"></a>

```go
func PutValueConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueConditions` <a name="ResetValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions"></a>

```go
func ResetValueConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions">ValueConditions</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput">ValueConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() IotCommandMandatoryParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value"></a>

```go
func Value() IotCommandMandatoryParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a>

---

##### `ValueConditions`<sup>Required</sup> <a name="ValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions"></a>

```go
func ValueConditions() IotCommandMandatoryParametersValueConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueConditionsInput`<sup>Optional</sup> <a name="ValueConditionsInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput"></a>

```go
func ValueConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandMandatoryParametersValueConditionsList <a name="IotCommandMandatoryParametersValueConditionsList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandMandatoryParametersValueConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotCommandMandatoryParametersValueConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get"></a>

```go
func Get(index *f64) IotCommandMandatoryParametersValueConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin"></a>

```go
func ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput">MinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max">Max</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min">Min</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *string
```

- *Type:* *string

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput"></a>

```go
func MinInput() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max"></a>

```go
func Max() *string
```

- *Type:* *string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min"></a>

```go
func Min() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandMandatoryParametersValueConditionsOperandOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandMandatoryParametersValueConditionsOperandOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotCommandMandatoryParametersValueConditionsOperandOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange">PutNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange">ResetNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers">ResetNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString">ResetString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings">ResetStrings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNumberRange` <a name="PutNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange"></a>

```go
func PutNumberRange(value IotCommandMandatoryParametersValueConditionsOperandNumberRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---

##### `ResetNumber` <a name="ResetNumber" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber"></a>

```go
func ResetNumber()
```

##### `ResetNumberRange` <a name="ResetNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange"></a>

```go
func ResetNumberRange()
```

##### `ResetNumbers` <a name="ResetNumbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers"></a>

```go
func ResetNumbers()
```

##### `ResetString` <a name="ResetString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString"></a>

```go
func ResetString()
```

##### `ResetStrings` <a name="ResetStrings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings"></a>

```go
func ResetStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange">NumberRange</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput">NumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput">NumberRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput">NumbersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput">StringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput">StringsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number">Number</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers">Numbers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string">String</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings">Strings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberRange`<sup>Required</sup> <a name="NumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange"></a>

```go
func NumberRange() IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a>

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput"></a>

```go
func NumberInput() *string
```

- *Type:* *string

---

##### `NumberRangeInput`<sup>Optional</sup> <a name="NumberRangeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput"></a>

```go
func NumberRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NumbersInput`<sup>Optional</sup> <a name="NumbersInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput"></a>

```go
func NumbersInput() *[]*string
```

- *Type:* *[]*string

---

##### `StringInput`<sup>Optional</sup> <a name="StringInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput"></a>

```go
func StringInput() *string
```

- *Type:* *string

---

##### `StringsInput`<sup>Optional</sup> <a name="StringsInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput"></a>

```go
func StringsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number"></a>

```go
func Number() *string
```

- *Type:* *string

---

##### `Numbers`<sup>Required</sup> <a name="Numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers"></a>

```go
func Numbers() *[]*string
```

- *Type:* *[]*string

---

##### `String`<sup>Required</sup> <a name="String" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string"></a>

```go
func String() *string
```

- *Type:* *string

---

##### `Strings`<sup>Required</sup> <a name="Strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings"></a>

```go
func Strings() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandMandatoryParametersValueConditionsOutputReference <a name="IotCommandMandatoryParametersValueConditionsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandMandatoryParametersValueConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotCommandMandatoryParametersValueConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand">PutOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand">ResetOperand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperand` <a name="PutOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand"></a>

```go
func PutOperand(value IotCommandMandatoryParametersValueConditionsOperand)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator"></a>

```go
func ResetComparisonOperator()
```

##### `ResetOperand` <a name="ResetOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand"></a>

```go
func ResetOperand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand">Operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput">OperandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operand`<sup>Required</sup> <a name="Operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand"></a>

```go
func Operand() IotCommandMandatoryParametersValueConditionsOperandOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `OperandInput`<sup>Optional</sup> <a name="OperandInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput"></a>

```go
func OperandInput() interface{}
```

- *Type:* interface{}

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandMandatoryParametersValueOutputReference <a name="IotCommandMandatoryParametersValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandMandatoryParametersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotCommandMandatoryParametersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB">ResetB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin">ResetBin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD">ResetD</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI">ResetI</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL">ResetL</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS">ResetS</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl">ResetUl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetB` <a name="ResetB" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB"></a>

```go
func ResetB()
```

##### `ResetBin` <a name="ResetBin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin"></a>

```go
func ResetBin()
```

##### `ResetD` <a name="ResetD" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD"></a>

```go
func ResetD()
```

##### `ResetI` <a name="ResetI" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI"></a>

```go
func ResetI()
```

##### `ResetL` <a name="ResetL" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL"></a>

```go
func ResetL()
```

##### `ResetS` <a name="ResetS" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS"></a>

```go
func ResetS()
```

##### `ResetUl` <a name="ResetUl" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl"></a>

```go
func ResetUl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput">BinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput">BInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput">DInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput">IInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput">LInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput">SInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput">UlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b">B</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin">Bin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d">D</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i">I</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l">L</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s">S</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul">Ul</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinInput`<sup>Optional</sup> <a name="BinInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput"></a>

```go
func BinInput() *string
```

- *Type:* *string

---

##### `BInput`<sup>Optional</sup> <a name="BInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput"></a>

```go
func BInput() interface{}
```

- *Type:* interface{}

---

##### `DInput`<sup>Optional</sup> <a name="DInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput"></a>

```go
func DInput() *f64
```

- *Type:* *f64

---

##### `IInput`<sup>Optional</sup> <a name="IInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput"></a>

```go
func IInput() *f64
```

- *Type:* *f64

---

##### `LInput`<sup>Optional</sup> <a name="LInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput"></a>

```go
func LInput() *string
```

- *Type:* *string

---

##### `SInput`<sup>Optional</sup> <a name="SInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput"></a>

```go
func SInput() *string
```

- *Type:* *string

---

##### `UlInput`<sup>Optional</sup> <a name="UlInput" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput"></a>

```go
func UlInput() *string
```

- *Type:* *string

---

##### `B`<sup>Required</sup> <a name="B" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b"></a>

```go
func B() interface{}
```

- *Type:* interface{}

---

##### `Bin`<sup>Required</sup> <a name="Bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin"></a>

```go
func Bin() *string
```

- *Type:* *string

---

##### `D`<sup>Required</sup> <a name="D" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d"></a>

```go
func D() *f64
```

- *Type:* *f64

---

##### `I`<sup>Required</sup> <a name="I" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i"></a>

```go
func I() *f64
```

- *Type:* *f64

---

##### `L`<sup>Required</sup> <a name="L" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l"></a>

```go
func L() *string
```

- *Type:* *string

---

##### `S`<sup>Required</sup> <a name="S" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s"></a>

```go
func S() *string
```

- *Type:* *string

---

##### `Ul`<sup>Required</sup> <a name="Ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul"></a>

```go
func Ul() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandPayloadOutputReference <a name="IotCommandPayloadOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotCommandPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType"></a>

```go
func ResetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandPreprocessorAwsJsonSubstitutionOutputReference <a name="IotCommandPreprocessorAwsJsonSubstitutionOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandPreprocessorAwsJsonSubstitutionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotCommandPreprocessorAwsJsonSubstitutionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat"></a>

```go
func ResetOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandPreprocessorOutputReference <a name="IotCommandPreprocessorOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandPreprocessorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotCommandPreprocessorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution">PutAwsJsonSubstitution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution">ResetAwsJsonSubstitution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsJsonSubstitution` <a name="PutAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution"></a>

```go
func PutAwsJsonSubstitution(value IotCommandPreprocessorAwsJsonSubstitution)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---

##### `ResetAwsJsonSubstitution` <a name="ResetAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution"></a>

```go
func ResetAwsJsonSubstitution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution">AwsJsonSubstitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput">AwsJsonSubstitutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsJsonSubstitution`<sup>Required</sup> <a name="AwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution"></a>

```go
func AwsJsonSubstitution() IotCommandPreprocessorAwsJsonSubstitutionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a>

---

##### `AwsJsonSubstitutionInput`<sup>Optional</sup> <a name="AwsJsonSubstitutionInput" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput"></a>

```go
func AwsJsonSubstitutionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandTagsList <a name="IotCommandTagsList" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotCommandTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get"></a>

```go
func Get(index *f64) IotCommandTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotCommandTagsOutputReference <a name="IotCommandTagsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotcommand"

iotcommand.NewIotCommandTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotCommandTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



