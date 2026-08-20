# `iotsitewisePortal` Submodule <a name="`iotsitewisePortal` Submodule" id="@cdktn/provider-awscc.iotsitewisePortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewisePortal <a name="IotsitewisePortal" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal awscc_iotsitewise_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.NewIotsitewisePortal(scope Construct, id *string, config IotsitewisePortalConfig) IotsitewisePortal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig">IotsitewisePortalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig">IotsitewisePortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms">PutAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration">PutPortalTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms">ResetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail">ResetNotificationSenderEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode">ResetPortalAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription">ResetPortalDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType">ResetPortalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration">ResetPortalTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlarms` <a name="PutAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms"></a>

```go
func PutAlarms(value IotsitewisePortalAlarms)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---

##### `PutPortalTypeConfiguration` <a name="PutPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration"></a>

```go
func PutPortalTypeConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlarms` <a name="ResetAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms"></a>

```go
func ResetAlarms()
```

##### `ResetNotificationSenderEmail` <a name="ResetNotificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail"></a>

```go
func ResetNotificationSenderEmail()
```

##### `ResetPortalAuthMode` <a name="ResetPortalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode"></a>

```go
func ResetPortalAuthMode()
```

##### `ResetPortalDescription` <a name="ResetPortalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription"></a>

```go
func ResetPortalDescription()
```

##### `ResetPortalType` <a name="ResetPortalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType"></a>

```go
func ResetPortalType()
```

##### `ResetPortalTypeConfiguration` <a name="ResetPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration"></a>

```go
func ResetPortalTypeConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.IotsitewisePortal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.IotsitewisePortal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.IotsitewisePortal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.IotsitewisePortal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotsitewisePortal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotsitewisePortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewisePortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn">PortalArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId">PortalClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId">PortalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl">PortalStartUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration">PortalTypeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput">AlarmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput">NotificationSenderEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput">PortalAuthModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput">PortalContactEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput">PortalDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput">PortalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput">PortalTypeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput">PortalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail">NotificationSenderEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode">PortalAuthMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail">PortalContactEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription">PortalDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName">PortalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType">PortalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms"></a>

```go
func Alarms() IotsitewisePortalAlarmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PortalArn`<sup>Required</sup> <a name="PortalArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn"></a>

```go
func PortalArn() *string
```

- *Type:* *string

---

##### `PortalClientId`<sup>Required</sup> <a name="PortalClientId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId"></a>

```go
func PortalClientId() *string
```

- *Type:* *string

---

##### `PortalId`<sup>Required</sup> <a name="PortalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId"></a>

```go
func PortalId() *string
```

- *Type:* *string

---

##### `PortalStartUrl`<sup>Required</sup> <a name="PortalStartUrl" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl"></a>

```go
func PortalStartUrl() *string
```

- *Type:* *string

---

##### `PortalTypeConfiguration`<sup>Required</sup> <a name="PortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration"></a>

```go
func PortalTypeConfiguration() IotsitewisePortalPortalTypeConfigurationMap
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags"></a>

```go
func Tags() IotsitewisePortalTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a>

---

##### `AlarmsInput`<sup>Optional</sup> <a name="AlarmsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput"></a>

```go
func AlarmsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationSenderEmailInput`<sup>Optional</sup> <a name="NotificationSenderEmailInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput"></a>

```go
func NotificationSenderEmailInput() *string
```

- *Type:* *string

---

##### `PortalAuthModeInput`<sup>Optional</sup> <a name="PortalAuthModeInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput"></a>

```go
func PortalAuthModeInput() *string
```

- *Type:* *string

---

##### `PortalContactEmailInput`<sup>Optional</sup> <a name="PortalContactEmailInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput"></a>

```go
func PortalContactEmailInput() *string
```

- *Type:* *string

---

##### `PortalDescriptionInput`<sup>Optional</sup> <a name="PortalDescriptionInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput"></a>

```go
func PortalDescriptionInput() *string
```

- *Type:* *string

---

##### `PortalNameInput`<sup>Optional</sup> <a name="PortalNameInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput"></a>

```go
func PortalNameInput() *string
```

- *Type:* *string

---

##### `PortalTypeConfigurationInput`<sup>Optional</sup> <a name="PortalTypeConfigurationInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput"></a>

```go
func PortalTypeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PortalTypeInput`<sup>Optional</sup> <a name="PortalTypeInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput"></a>

```go
func PortalTypeInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationSenderEmail`<sup>Required</sup> <a name="NotificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail"></a>

```go
func NotificationSenderEmail() *string
```

- *Type:* *string

---

##### `PortalAuthMode`<sup>Required</sup> <a name="PortalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode"></a>

```go
func PortalAuthMode() *string
```

- *Type:* *string

---

##### `PortalContactEmail`<sup>Required</sup> <a name="PortalContactEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail"></a>

```go
func PortalContactEmail() *string
```

- *Type:* *string

---

##### `PortalDescription`<sup>Required</sup> <a name="PortalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription"></a>

```go
func PortalDescription() *string
```

- *Type:* *string

---

##### `PortalName`<sup>Required</sup> <a name="PortalName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName"></a>

```go
func PortalName() *string
```

- *Type:* *string

---

##### `PortalType`<sup>Required</sup> <a name="PortalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType"></a>

```go
func PortalType() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewisePortalAlarms <a name="IotsitewisePortalAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

&iotsitewiseportal.IotsitewisePortalAlarms {
	AlarmRoleArn: *string,
	NotificationLambdaArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn">AlarmRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn">NotificationLambdaArn</a></code> | <code>*string</code> | The ARN of the AWS Lambda function that manages alarm notifications. |

---

##### `AlarmRoleArn`<sup>Optional</sup> <a name="AlarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn"></a>

```go
AlarmRoleArn *string
```

- *Type:* *string

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarm_role_arn IotsitewisePortal#alarm_role_arn}

---

##### `NotificationLambdaArn`<sup>Optional</sup> <a name="NotificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn"></a>

```go
NotificationLambdaArn *string
```

- *Type:* *string

The ARN of the AWS Lambda function that manages alarm notifications.

For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_lambda_arn IotsitewisePortal#notification_lambda_arn}

---

### IotsitewisePortalConfig <a name="IotsitewisePortalConfig" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

&iotsitewiseportal.IotsitewisePortalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PortalContactEmail: *string,
	PortalName: *string,
	RoleArn: *string,
	Alarms: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewisePortal.IotsitewisePortalAlarms,
	NotificationSenderEmail: *string,
	PortalAuthMode: *string,
	PortalDescription: *string,
	PortalType: *string,
	PortalTypeConfiguration: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail">PortalContactEmail</a></code> | <code>*string</code> | The AWS administrator's contact email address. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName">PortalName</a></code> | <code>*string</code> | A friendly name for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail">NotificationSenderEmail</a></code> | <code>*string</code> | The email address that sends alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode">PortalAuthMode</a></code> | <code>*string</code> | The service to use to authenticate users to the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription">PortalDescription</a></code> | <code>*string</code> | A description for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType">PortalType</a></code> | <code>*string</code> | The type of portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration">PortalTypeConfiguration</a></code> | <code>interface{}</code> | Map to associate detail of configuration related with a PortalType. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that contain metadata for the portal. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PortalContactEmail`<sup>Required</sup> <a name="PortalContactEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail"></a>

```go
PortalContactEmail *string
```

- *Type:* *string

The AWS administrator's contact email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_contact_email IotsitewisePortal#portal_contact_email}

---

##### `PortalName`<sup>Required</sup> <a name="PortalName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName"></a>

```go
PortalName *string
```

- *Type:* *string

A friendly name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_name IotsitewisePortal#portal_name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#role_arn IotsitewisePortal#role_arn}

---

##### `Alarms`<sup>Optional</sup> <a name="Alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms"></a>

```go
Alarms IotsitewisePortalAlarms
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.

You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarms IotsitewisePortal#alarms}

---

##### `NotificationSenderEmail`<sup>Optional</sup> <a name="NotificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail"></a>

```go
NotificationSenderEmail *string
```

- *Type:* *string

The email address that sends alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_sender_email IotsitewisePortal#notification_sender_email}

---

##### `PortalAuthMode`<sup>Optional</sup> <a name="PortalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode"></a>

```go
PortalAuthMode *string
```

- *Type:* *string

The service to use to authenticate users to the portal.

Choose from SSO or IAM. You can't change this value after you create a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_auth_mode IotsitewisePortal#portal_auth_mode}

---

##### `PortalDescription`<sup>Optional</sup> <a name="PortalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription"></a>

```go
PortalDescription *string
```

- *Type:* *string

A description for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_description IotsitewisePortal#portal_description}

---

##### `PortalType`<sup>Optional</sup> <a name="PortalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType"></a>

```go
PortalType *string
```

- *Type:* *string

The type of portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type IotsitewisePortal#portal_type}

---

##### `PortalTypeConfiguration`<sup>Optional</sup> <a name="PortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration"></a>

```go
PortalTypeConfiguration interface{}
```

- *Type:* interface{}

Map to associate detail of configuration related with a PortalType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type_configuration IotsitewisePortal#portal_type_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that contain metadata for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#tags IotsitewisePortal#tags}

---

### IotsitewisePortalPortalTypeConfiguration <a name="IotsitewisePortalPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

&iotsitewiseportal.IotsitewisePortalPortalTypeConfiguration {
	PortalTools: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools">PortalTools</a></code> | <code>*[]*string</code> | List of enabled Tools for a certain portal. |

---

##### `PortalTools`<sup>Optional</sup> <a name="PortalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools"></a>

```go
PortalTools *[]*string
```

- *Type:* *[]*string

List of enabled Tools for a certain portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_tools IotsitewisePortal#portal_tools}

---

### IotsitewisePortalTags <a name="IotsitewisePortalTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

&iotsitewiseportal.IotsitewisePortalTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewisePortalAlarmsOutputReference <a name="IotsitewisePortalAlarmsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.NewIotsitewisePortalAlarmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewisePortalAlarmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn">ResetAlarmRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn">ResetNotificationLambdaArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmRoleArn` <a name="ResetAlarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn"></a>

```go
func ResetAlarmRoleArn()
```

##### `ResetNotificationLambdaArn` <a name="ResetNotificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn"></a>

```go
func ResetNotificationLambdaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput">AlarmRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput">NotificationLambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn">AlarmRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn">NotificationLambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmRoleArnInput`<sup>Optional</sup> <a name="AlarmRoleArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput"></a>

```go
func AlarmRoleArnInput() *string
```

- *Type:* *string

---

##### `NotificationLambdaArnInput`<sup>Optional</sup> <a name="NotificationLambdaArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput"></a>

```go
func NotificationLambdaArnInput() *string
```

- *Type:* *string

---

##### `AlarmRoleArn`<sup>Required</sup> <a name="AlarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn"></a>

```go
func AlarmRoleArn() *string
```

- *Type:* *string

---

##### `NotificationLambdaArn`<sup>Required</sup> <a name="NotificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn"></a>

```go
func NotificationLambdaArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewisePortalPortalTypeConfigurationMap <a name="IotsitewisePortalPortalTypeConfigurationMap" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.NewIotsitewisePortalPortalTypeConfigurationMap(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewisePortalPortalTypeConfigurationMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get"></a>

```go
func Get(key *string) IotsitewisePortalPortalTypeConfigurationOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewisePortalPortalTypeConfigurationOutputReference <a name="IotsitewisePortalPortalTypeConfigurationOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.NewIotsitewisePortalPortalTypeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) IotsitewisePortalPortalTypeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools">ResetPortalTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortalTools` <a name="ResetPortalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools"></a>

```go
func ResetPortalTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput">PortalToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools">PortalTools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortalToolsInput`<sup>Optional</sup> <a name="PortalToolsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput"></a>

```go
func PortalToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PortalTools`<sup>Required</sup> <a name="PortalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools"></a>

```go
func PortalTools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewisePortalTagsList <a name="IotsitewisePortalTagsList" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.NewIotsitewisePortalTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewisePortalTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get"></a>

```go
func Get(index *f64) IotsitewisePortalTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewisePortalTagsOutputReference <a name="IotsitewisePortalTagsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewiseportal"

iotsitewiseportal.NewIotsitewisePortalTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewisePortalTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



