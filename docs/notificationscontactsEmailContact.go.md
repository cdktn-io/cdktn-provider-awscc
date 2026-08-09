# `notificationscontactsEmailContact` Submodule <a name="`notificationscontactsEmailContact` Submodule" id="@cdktn/provider-awscc.notificationscontactsEmailContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationscontactsEmailContact <a name="NotificationscontactsEmailContact" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact awscc_notificationscontacts_email_contact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

notificationscontactsemailcontact.NewNotificationscontactsEmailContact(scope Construct, id *string, config NotificationscontactsEmailContactConfig) NotificationscontactsEmailContact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig">NotificationscontactsEmailContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig">NotificationscontactsEmailContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationscontactsEmailContact resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

notificationscontactsemailcontact.NotificationscontactsEmailContact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

notificationscontactsemailcontact.NotificationscontactsEmailContact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

notificationscontactsemailcontact.NotificationscontactsEmailContact_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

notificationscontactsemailcontact.NotificationscontactsEmailContact_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NotificationscontactsEmailContact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationscontactsEmailContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationscontactsEmailContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NotificationscontactsEmailContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailContact">EmailContact</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference">NotificationscontactsEmailContactEmailContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList">NotificationscontactsEmailContactTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EmailContact`<sup>Required</sup> <a name="EmailContact" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailContact"></a>

```go
func EmailContact() NotificationscontactsEmailContactEmailContactOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference">NotificationscontactsEmailContactEmailContactOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tags"></a>

```go
func Tags() NotificationscontactsEmailContactTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList">NotificationscontactsEmailContactTagsList</a>

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationscontactsEmailContactConfig <a name="NotificationscontactsEmailContactConfig" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

&notificationscontactsemailcontact.NotificationscontactsEmailContactConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EmailAddress: *string,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of tags that are attached to the role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of tags that are attached to the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#tags NotificationscontactsEmailContact#tags}

---

### NotificationscontactsEmailContactEmailContact <a name="NotificationscontactsEmailContactEmailContact" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

&notificationscontactsemailcontact.NotificationscontactsEmailContactEmailContact {

}
```


### NotificationscontactsEmailContactTags <a name="NotificationscontactsEmailContactTags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

&notificationscontactsemailcontact.NotificationscontactsEmailContactTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#key NotificationscontactsEmailContact#key}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#value NotificationscontactsEmailContact#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#key NotificationscontactsEmailContact#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notificationscontacts_email_contact#value NotificationscontactsEmailContact#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationscontactsEmailContactEmailContactOutputReference <a name="NotificationscontactsEmailContactEmailContactOutputReference" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

notificationscontactsemailcontact.NewNotificationscontactsEmailContactEmailContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationscontactsEmailContactEmailContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact">NotificationscontactsEmailContactEmailContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationscontactsEmailContactEmailContact
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact">NotificationscontactsEmailContactEmailContact</a>

---


### NotificationscontactsEmailContactTagsList <a name="NotificationscontactsEmailContactTagsList" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

notificationscontactsemailcontact.NewNotificationscontactsEmailContactTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationscontactsEmailContactTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.get"></a>

```go
func Get(index *f64) NotificationscontactsEmailContactTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationscontactsEmailContactTagsOutputReference <a name="NotificationscontactsEmailContactTagsOutputReference" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationscontactsemailcontact"

notificationscontactsemailcontact.NewNotificationscontactsEmailContactTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationscontactsEmailContactTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



