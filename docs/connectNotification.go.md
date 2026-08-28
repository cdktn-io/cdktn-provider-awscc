# `connectNotification` Submodule <a name="`connectNotification` Submodule" id="@cdktn/provider-awscc.connectNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectNotification <a name="ConnectNotification" id="@cdktn/provider-awscc.connectNotification.ConnectNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification awscc_connect_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

connectnotification.NewConnectNotification(scope Construct, id *string, config ConnectNotificationConfig) ConnectNotification
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig">ConnectNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig">ConnectNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients">ResetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent"></a>

```go
func PutContent(value ConnectNotificationContent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt"></a>

```go
func ResetExpiresAt()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients"></a>

```go
func ResetRecipients()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

connectnotification.ConnectNotification_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

connectnotification.ConnectNotification_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

connectnotification.ConnectNotification_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

connectnotification.ConnectNotification_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId">NotificationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput">ContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput">ExpiresAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content"></a>

```go
func Content() ConnectNotificationContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationId`<sup>Required</sup> <a name="NotificationId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId"></a>

```go
func NotificationId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags"></a>

```go
func Tags() ConnectNotificationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput"></a>

```go
func ContentInput() interface{}
```

- *Type:* interface{}

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput"></a>

```go
func ExpiresAtInput() *string
```

- *Type:* *string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectNotificationConfig <a name="ConnectNotificationConfig" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

&connectnotification.ConnectNotificationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Content: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectNotification.ConnectNotificationContent,
	InstanceArn: *string,
	ExpiresAt: *string,
	Priority: *string,
	Recipients: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | The content of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | The time a notification will expire. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority">Priority</a></code> | <code>*string</code> | The priority of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients">Recipients</a></code> | <code>*[]*string</code> | The recipients of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content"></a>

```go
Content ConnectNotificationContent
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

The content of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#content ConnectNotification#content}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#instance_arn ConnectNotification#instance_arn}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt"></a>

```go
ExpiresAt *string
```

- *Type:* *string

The time a notification will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#expires_at ConnectNotification#expires_at}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

The priority of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#priority ConnectNotification#priority}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

The recipients of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#recipients ConnectNotification#recipients}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#tags ConnectNotification#tags}

---

### ConnectNotificationContent <a name="ConnectNotificationContent" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

&connectnotification.ConnectNotificationContent {
	DeDe: *string,
	EnUs: *string,
	EsEs: *string,
	FrFr: *string,
	IdId: *string,
	ItIt: *string,
	JaJp: *string,
	KoKr: *string,
	PtBr: *string,
	ZhCn: *string,
	ZhTw: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe">DeDe</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs">EnUs</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs">EsEs</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr">FrFr</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId">IdId</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt">ItIt</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp">JaJp</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr">KoKr</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr">PtBr</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn">ZhCn</a></code> | <code>*string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw">ZhTw</a></code> | <code>*string</code> | Localized notification content. |

---

##### `DeDe`<sup>Optional</sup> <a name="DeDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe"></a>

```go
DeDe *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#de_de ConnectNotification#de_de}

---

##### `EnUs`<sup>Optional</sup> <a name="EnUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs"></a>

```go
EnUs *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#en_us ConnectNotification#en_us}

---

##### `EsEs`<sup>Optional</sup> <a name="EsEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs"></a>

```go
EsEs *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#es_es ConnectNotification#es_es}

---

##### `FrFr`<sup>Optional</sup> <a name="FrFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr"></a>

```go
FrFr *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#fr_fr ConnectNotification#fr_fr}

---

##### `IdId`<sup>Optional</sup> <a name="IdId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId"></a>

```go
IdId *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#id_id ConnectNotification#id_id}

---

##### `ItIt`<sup>Optional</sup> <a name="ItIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt"></a>

```go
ItIt *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#it_it ConnectNotification#it_it}

---

##### `JaJp`<sup>Optional</sup> <a name="JaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp"></a>

```go
JaJp *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#ja_jp ConnectNotification#ja_jp}

---

##### `KoKr`<sup>Optional</sup> <a name="KoKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr"></a>

```go
KoKr *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#ko_kr ConnectNotification#ko_kr}

---

##### `PtBr`<sup>Optional</sup> <a name="PtBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr"></a>

```go
PtBr *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#pt_br ConnectNotification#pt_br}

---

##### `ZhCn`<sup>Optional</sup> <a name="ZhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn"></a>

```go
ZhCn *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#zh_cn ConnectNotification#zh_cn}

---

##### `ZhTw`<sup>Optional</sup> <a name="ZhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw"></a>

```go
ZhTw *string
```

- *Type:* *string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#zh_tw ConnectNotification#zh_tw}

---

### ConnectNotificationTags <a name="ConnectNotificationTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

&connectnotification.ConnectNotificationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#key ConnectNotification#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_notification#value ConnectNotification#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectNotificationContentOutputReference <a name="ConnectNotificationContentOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

connectnotification.NewConnectNotificationContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectNotificationContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe">ResetDeDe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs">ResetEnUs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs">ResetEsEs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr">ResetFrFr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId">ResetIdId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt">ResetItIt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp">ResetJaJp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr">ResetKoKr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr">ResetPtBr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn">ResetZhCn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw">ResetZhTw</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeDe` <a name="ResetDeDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe"></a>

```go
func ResetDeDe()
```

##### `ResetEnUs` <a name="ResetEnUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs"></a>

```go
func ResetEnUs()
```

##### `ResetEsEs` <a name="ResetEsEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs"></a>

```go
func ResetEsEs()
```

##### `ResetFrFr` <a name="ResetFrFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr"></a>

```go
func ResetFrFr()
```

##### `ResetIdId` <a name="ResetIdId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId"></a>

```go
func ResetIdId()
```

##### `ResetItIt` <a name="ResetItIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt"></a>

```go
func ResetItIt()
```

##### `ResetJaJp` <a name="ResetJaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp"></a>

```go
func ResetJaJp()
```

##### `ResetKoKr` <a name="ResetKoKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr"></a>

```go
func ResetKoKr()
```

##### `ResetPtBr` <a name="ResetPtBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr"></a>

```go
func ResetPtBr()
```

##### `ResetZhCn` <a name="ResetZhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn"></a>

```go
func ResetZhCn()
```

##### `ResetZhTw` <a name="ResetZhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw"></a>

```go
func ResetZhTw()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput">DeDeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput">EnUsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput">EsEsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput">FrFrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput">IdIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput">ItItInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput">JaJpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput">KoKrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput">PtBrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput">ZhCnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput">ZhTwInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe">DeDe</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs">EnUs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs">EsEs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr">FrFr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId">IdId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt">ItIt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp">JaJp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr">KoKr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr">PtBr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn">ZhCn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw">ZhTw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeDeInput`<sup>Optional</sup> <a name="DeDeInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput"></a>

```go
func DeDeInput() *string
```

- *Type:* *string

---

##### `EnUsInput`<sup>Optional</sup> <a name="EnUsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput"></a>

```go
func EnUsInput() *string
```

- *Type:* *string

---

##### `EsEsInput`<sup>Optional</sup> <a name="EsEsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput"></a>

```go
func EsEsInput() *string
```

- *Type:* *string

---

##### `FrFrInput`<sup>Optional</sup> <a name="FrFrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput"></a>

```go
func FrFrInput() *string
```

- *Type:* *string

---

##### `IdIdInput`<sup>Optional</sup> <a name="IdIdInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput"></a>

```go
func IdIdInput() *string
```

- *Type:* *string

---

##### `ItItInput`<sup>Optional</sup> <a name="ItItInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput"></a>

```go
func ItItInput() *string
```

- *Type:* *string

---

##### `JaJpInput`<sup>Optional</sup> <a name="JaJpInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput"></a>

```go
func JaJpInput() *string
```

- *Type:* *string

---

##### `KoKrInput`<sup>Optional</sup> <a name="KoKrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput"></a>

```go
func KoKrInput() *string
```

- *Type:* *string

---

##### `PtBrInput`<sup>Optional</sup> <a name="PtBrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput"></a>

```go
func PtBrInput() *string
```

- *Type:* *string

---

##### `ZhCnInput`<sup>Optional</sup> <a name="ZhCnInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput"></a>

```go
func ZhCnInput() *string
```

- *Type:* *string

---

##### `ZhTwInput`<sup>Optional</sup> <a name="ZhTwInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput"></a>

```go
func ZhTwInput() *string
```

- *Type:* *string

---

##### `DeDe`<sup>Required</sup> <a name="DeDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe"></a>

```go
func DeDe() *string
```

- *Type:* *string

---

##### `EnUs`<sup>Required</sup> <a name="EnUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs"></a>

```go
func EnUs() *string
```

- *Type:* *string

---

##### `EsEs`<sup>Required</sup> <a name="EsEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs"></a>

```go
func EsEs() *string
```

- *Type:* *string

---

##### `FrFr`<sup>Required</sup> <a name="FrFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr"></a>

```go
func FrFr() *string
```

- *Type:* *string

---

##### `IdId`<sup>Required</sup> <a name="IdId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId"></a>

```go
func IdId() *string
```

- *Type:* *string

---

##### `ItIt`<sup>Required</sup> <a name="ItIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt"></a>

```go
func ItIt() *string
```

- *Type:* *string

---

##### `JaJp`<sup>Required</sup> <a name="JaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp"></a>

```go
func JaJp() *string
```

- *Type:* *string

---

##### `KoKr`<sup>Required</sup> <a name="KoKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr"></a>

```go
func KoKr() *string
```

- *Type:* *string

---

##### `PtBr`<sup>Required</sup> <a name="PtBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr"></a>

```go
func PtBr() *string
```

- *Type:* *string

---

##### `ZhCn`<sup>Required</sup> <a name="ZhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn"></a>

```go
func ZhCn() *string
```

- *Type:* *string

---

##### `ZhTw`<sup>Required</sup> <a name="ZhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw"></a>

```go
func ZhTw() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectNotificationTagsList <a name="ConnectNotificationTagsList" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

connectnotification.NewConnectNotificationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectNotificationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get"></a>

```go
func Get(index *f64) ConnectNotificationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectNotificationTagsOutputReference <a name="ConnectNotificationTagsOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectnotification"

connectnotification.NewConnectNotificationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectNotificationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



