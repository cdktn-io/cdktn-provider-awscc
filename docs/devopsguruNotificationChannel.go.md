# `devopsguruNotificationChannel` Submodule <a name="`devopsguruNotificationChannel` Submodule" id="@cdktn/provider-awscc.devopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruNotificationChannel <a name="DevopsguruNotificationChannel" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel awscc_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

devopsgurunotificationchannel.NewDevopsguruNotificationChannel(scope Construct, id *string, config DevopsguruNotificationChannelConfig) DevopsguruNotificationChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig">PutConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig"></a>

```go
func PutConfig(value DevopsguruNotificationChannelConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

devopsgurunotificationchannel.DevopsguruNotificationChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

devopsgurunotificationchannel.DevopsguruNotificationChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

devopsgurunotificationchannel.DevopsguruNotificationChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

devopsgurunotificationchannel.DevopsguruNotificationChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsguruNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference">DevopsguruNotificationChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.notificationChannelId">NotificationChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.config"></a>

```go
func Config() DevopsguruNotificationChannelConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference">DevopsguruNotificationChannelConfigAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationChannelId`<sup>Required</sup> <a name="NotificationChannelId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.notificationChannelId"></a>

```go
func NotificationChannelId() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruNotificationChannelConfig <a name="DevopsguruNotificationChannelConfig" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

&devopsgurunotificationchannel.DevopsguruNotificationChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Config: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | Information about notification channels you have configured with DevOps Guru. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.config"></a>

```go
Config DevopsguruNotificationChannelConfigA
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

Information about notification channels you have configured with DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#config DevopsguruNotificationChannel#config}

---

### DevopsguruNotificationChannelConfigA <a name="DevopsguruNotificationChannelConfigA" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

&devopsgurunotificationchannel.DevopsguruNotificationChannelConfigA {
	Filters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters,
	Sns: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | Information about filters of a notification channel configured in DevOpsGuru to filter for insights. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | Information about a notification channel configured in DevOps Guru to send notifications when insights are created. |

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.filters"></a>

```go
Filters DevopsguruNotificationChannelConfigFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

Information about filters of a notification channel configured in DevOpsGuru to filter for insights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}

---

##### `Sns`<sup>Optional</sup> <a name="Sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.sns"></a>

```go
Sns DevopsguruNotificationChannelConfigSns
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

Information about a notification channel configured in DevOps Guru to send notifications when insights are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}

---

### DevopsguruNotificationChannelConfigFilters <a name="DevopsguruNotificationChannelConfigFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

&devopsgurunotificationchannel.DevopsguruNotificationChannelConfigFilters {
	MessageTypes: *[]*string,
	Severities: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.messageTypes">MessageTypes</a></code> | <code>*[]*string</code> | DevOps Guru message types to filter for. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.severities">Severities</a></code> | <code>*[]*string</code> | DevOps Guru insight severities to filter for. |

---

##### `MessageTypes`<sup>Optional</sup> <a name="MessageTypes" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.messageTypes"></a>

```go
MessageTypes *[]*string
```

- *Type:* *[]*string

DevOps Guru message types to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}

---

##### `Severities`<sup>Optional</sup> <a name="Severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.severities"></a>

```go
Severities *[]*string
```

- *Type:* *[]*string

DevOps Guru insight severities to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}

---

### DevopsguruNotificationChannelConfigSns <a name="DevopsguruNotificationChannelConfigSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

&devopsgurunotificationchannel.DevopsguruNotificationChannelConfigSns {
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}. |

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruNotificationChannelConfigAOutputReference <a name="DevopsguruNotificationChannelConfigAOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

devopsgurunotificationchannel.NewDevopsguruNotificationChannelConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsguruNotificationChannelConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns">PutSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetSns">ResetSns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters"></a>

```go
func PutFilters(value DevopsguruNotificationChannelConfigFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

---

##### `PutSns` <a name="PutSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns"></a>

```go
func PutSns(value DevopsguruNotificationChannelConfigSns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetSns` <a name="ResetSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetSns"></a>

```go
func ResetSns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference">DevopsguruNotificationChannelConfigFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference">DevopsguruNotificationChannelConfigSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.snsInput">SnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filters"></a>

```go
func Filters() DevopsguruNotificationChannelConfigFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference">DevopsguruNotificationChannelConfigFiltersOutputReference</a>

---

##### `Sns`<sup>Required</sup> <a name="Sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.sns"></a>

```go
func Sns() DevopsguruNotificationChannelConfigSnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference">DevopsguruNotificationChannelConfigSnsOutputReference</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `SnsInput`<sup>Optional</sup> <a name="SnsInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.snsInput"></a>

```go
func SnsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruNotificationChannelConfigFiltersOutputReference <a name="DevopsguruNotificationChannelConfigFiltersOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

devopsgurunotificationchannel.NewDevopsguruNotificationChannelConfigFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsguruNotificationChannelConfigFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetMessageTypes">ResetMessageTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetSeverities">ResetSeverities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageTypes` <a name="ResetMessageTypes" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetMessageTypes"></a>

```go
func ResetMessageTypes()
```

##### `ResetSeverities` <a name="ResetSeverities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetSeverities"></a>

```go
func ResetSeverities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypesInput">MessageTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severitiesInput">SeveritiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes">MessageTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severities">Severities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageTypesInput`<sup>Optional</sup> <a name="MessageTypesInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypesInput"></a>

```go
func MessageTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeveritiesInput`<sup>Optional</sup> <a name="SeveritiesInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severitiesInput"></a>

```go
func SeveritiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MessageTypes`<sup>Required</sup> <a name="MessageTypes" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes"></a>

```go
func MessageTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Severities`<sup>Required</sup> <a name="Severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severities"></a>

```go
func Severities() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruNotificationChannelConfigSnsOutputReference <a name="DevopsguruNotificationChannelConfigSnsOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsgurunotificationchannel"

devopsgurunotificationchannel.NewDevopsguruNotificationChannelConfigSnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsguruNotificationChannelConfigSnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resetTopicArn"></a>

```go
func ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



