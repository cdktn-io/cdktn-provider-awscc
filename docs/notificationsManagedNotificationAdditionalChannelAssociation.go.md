# `notificationsManagedNotificationAdditionalChannelAssociation` Submodule <a name="`notificationsManagedNotificationAdditionalChannelAssociation` Submodule" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsManagedNotificationAdditionalChannelAssociation <a name="NotificationsManagedNotificationAdditionalChannelAssociation" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_additional_channel_association awscc_notifications_managed_notification_additional_channel_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationsmanagednotificationadditionalchannelassociation"

notificationsmanagednotificationadditionalchannelassociation.NewNotificationsManagedNotificationAdditionalChannelAssociation(scope Construct, id *string, config NotificationsManagedNotificationAdditionalChannelAssociationConfig) NotificationsManagedNotificationAdditionalChannelAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig">NotificationsManagedNotificationAdditionalChannelAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig">NotificationsManagedNotificationAdditionalChannelAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationsManagedNotificationAdditionalChannelAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationsmanagednotificationadditionalchannelassociation"

notificationsmanagednotificationadditionalchannelassociation.NotificationsManagedNotificationAdditionalChannelAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationsmanagednotificationadditionalchannelassociation"

notificationsmanagednotificationadditionalchannelassociation.NotificationsManagedNotificationAdditionalChannelAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationsmanagednotificationadditionalchannelassociation"

notificationsmanagednotificationadditionalchannelassociation.NotificationsManagedNotificationAdditionalChannelAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationsmanagednotificationadditionalchannelassociation"

notificationsmanagednotificationadditionalchannelassociation.NotificationsManagedNotificationAdditionalChannelAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NotificationsManagedNotificationAdditionalChannelAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationsManagedNotificationAdditionalChannelAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationsManagedNotificationAdditionalChannelAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_additional_channel_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NotificationsManagedNotificationAdditionalChannelAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArnInput">ChannelArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationConfigurationArnInput">ManagedNotificationConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArn">ChannelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationConfigurationArn">ManagedNotificationConfigurationArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ChannelArnInput`<sup>Optional</sup> <a name="ChannelArnInput" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArnInput"></a>

```go
func ChannelArnInput() *string
```

- *Type:* *string

---

##### `ManagedNotificationConfigurationArnInput`<sup>Optional</sup> <a name="ManagedNotificationConfigurationArnInput" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationConfigurationArnInput"></a>

```go
func ManagedNotificationConfigurationArnInput() *string
```

- *Type:* *string

---

##### `ChannelArn`<sup>Required</sup> <a name="ChannelArn" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArn"></a>

```go
func ChannelArn() *string
```

- *Type:* *string

---

##### `ManagedNotificationConfigurationArn`<sup>Required</sup> <a name="ManagedNotificationConfigurationArn" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationConfigurationArn"></a>

```go
func ManagedNotificationConfigurationArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsManagedNotificationAdditionalChannelAssociationConfig <a name="NotificationsManagedNotificationAdditionalChannelAssociationConfig" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationsmanagednotificationadditionalchannelassociation"

&notificationsmanagednotificationadditionalchannelassociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelArn: *string,
	ManagedNotificationConfigurationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.channelArn">ChannelArn</a></code> | <code>*string</code> | ARN identifier of the channel. Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops. |
| <code><a href="#@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.managedNotificationConfigurationArn">ManagedNotificationConfigurationArn</a></code> | <code>*string</code> | ARN identifier of the Managed Notification. Example: arn:aws:notifications::381491923782:managed-notification-configuration/category/AWS-Health/sub-category/Billing. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelArn`<sup>Required</sup> <a name="ChannelArn" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.channelArn"></a>

```go
ChannelArn *string
```

- *Type:* *string

ARN identifier of the channel. Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_additional_channel_association#channel_arn NotificationsManagedNotificationAdditionalChannelAssociation#channel_arn}

---

##### `ManagedNotificationConfigurationArn`<sup>Required</sup> <a name="ManagedNotificationConfigurationArn" id="@cdktn/provider-awscc.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.managedNotificationConfigurationArn"></a>

```go
ManagedNotificationConfigurationArn *string
```

- *Type:* *string

ARN identifier of the Managed Notification. Example: arn:aws:notifications::381491923782:managed-notification-configuration/category/AWS-Health/sub-category/Billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_managed_notification_additional_channel_association#managed_notification_configuration_arn NotificationsManagedNotificationAdditionalChannelAssociation#managed_notification_configuration_arn}

---



