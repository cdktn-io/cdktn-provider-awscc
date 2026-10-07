# `smsvoiceRegistrationAttachment` Submodule <a name="`smsvoiceRegistrationAttachment` Submodule" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceRegistrationAttachment <a name="SmsvoiceRegistrationAttachment" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/smsvoice_registration_attachment awscc_smsvoice_registration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceregistrationattachment"

smsvoiceregistrationattachment.NewSmsvoiceRegistrationAttachment(scope Construct, id *string, config SmsvoiceRegistrationAttachmentConfig) SmsvoiceRegistrationAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig">SmsvoiceRegistrationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig">SmsvoiceRegistrationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetAttachmentBody">ResetAttachmentBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetAttachmentUrl">ResetAttachmentUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttachmentBody` <a name="ResetAttachmentBody" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetAttachmentBody"></a>

```go
func ResetAttachmentBody()
```

##### `ResetAttachmentUrl` <a name="ResetAttachmentUrl" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetAttachmentUrl"></a>

```go
func ResetAttachmentUrl()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceRegistrationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceregistrationattachment"

smsvoiceregistrationattachment.SmsvoiceRegistrationAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceregistrationattachment"

smsvoiceregistrationattachment.SmsvoiceRegistrationAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceregistrationattachment"

smsvoiceregistrationattachment.SmsvoiceRegistrationAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceregistrationattachment"

smsvoiceregistrationattachment.SmsvoiceRegistrationAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SmsvoiceRegistrationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SmsvoiceRegistrationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SmsvoiceRegistrationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/smsvoice_registration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceRegistrationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentStatus">AttachmentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.registrationAttachmentArn">RegistrationAttachmentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.registrationAttachmentId">RegistrationAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList">SmsvoiceRegistrationAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.uploadedAttachmentUrl">UploadedAttachmentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentBodyInput">AttachmentBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentUrlInput">AttachmentUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentBody">AttachmentBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentUrl">AttachmentUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentStatus`<sup>Required</sup> <a name="AttachmentStatus" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentStatus"></a>

```go
func AttachmentStatus() *string
```

- *Type:* *string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegistrationAttachmentArn`<sup>Required</sup> <a name="RegistrationAttachmentArn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.registrationAttachmentArn"></a>

```go
func RegistrationAttachmentArn() *string
```

- *Type:* *string

---

##### `RegistrationAttachmentId`<sup>Required</sup> <a name="RegistrationAttachmentId" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.registrationAttachmentId"></a>

```go
func RegistrationAttachmentId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tags"></a>

```go
func Tags() SmsvoiceRegistrationAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList">SmsvoiceRegistrationAttachmentTagsList</a>

---

##### `UploadedAttachmentUrl`<sup>Required</sup> <a name="UploadedAttachmentUrl" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.uploadedAttachmentUrl"></a>

```go
func UploadedAttachmentUrl() *string
```

- *Type:* *string

---

##### `AttachmentBodyInput`<sup>Optional</sup> <a name="AttachmentBodyInput" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentBodyInput"></a>

```go
func AttachmentBodyInput() *string
```

- *Type:* *string

---

##### `AttachmentUrlInput`<sup>Optional</sup> <a name="AttachmentUrlInput" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentUrlInput"></a>

```go
func AttachmentUrlInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AttachmentBody`<sup>Required</sup> <a name="AttachmentBody" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentBody"></a>

```go
func AttachmentBody() *string
```

- *Type:* *string

---

##### `AttachmentUrl`<sup>Required</sup> <a name="AttachmentUrl" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentUrl"></a>

```go
func AttachmentUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceRegistrationAttachmentConfig <a name="SmsvoiceRegistrationAttachmentConfig" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceregistrationattachment"

&smsvoiceregistrationattachment.SmsvoiceRegistrationAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentBody: *string,
	AttachmentUrl: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.attachmentBody">AttachmentBody</a></code> | <code>*string</code> | The registration file to upload. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.attachmentUrl">AttachmentUrl</a></code> | <code>*string</code> | A URL to the required registration file. For example, the URL to an MMS/shortcode form. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of tags (key and value pairs) to associate with the registration attachment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentBody`<sup>Optional</sup> <a name="AttachmentBody" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.attachmentBody"></a>

```go
AttachmentBody *string
```

- *Type:* *string

The registration file to upload.

The maximum file size is 1500KB and valid file extensions are PDF, JPEG and PNG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/smsvoice_registration_attachment#attachment_body SmsvoiceRegistrationAttachment#attachment_body}

---

##### `AttachmentUrl`<sup>Optional</sup> <a name="AttachmentUrl" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.attachmentUrl"></a>

```go
AttachmentUrl *string
```

- *Type:* *string

A URL to the required registration file. For example, the URL to an MMS/shortcode form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/smsvoice_registration_attachment#attachment_url SmsvoiceRegistrationAttachment#attachment_url}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of tags (key and value pairs) to associate with the registration attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/smsvoice_registration_attachment#tags SmsvoiceRegistrationAttachment#tags}

---

### SmsvoiceRegistrationAttachmentTags <a name="SmsvoiceRegistrationAttachmentTags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceregistrationattachment"

&smsvoiceregistrationattachment.SmsvoiceRegistrationAttachmentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.property.key">Key</a></code> | <code>*string</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.property.value">Value</a></code> | <code>*string</code> | The string value associated with the key of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/smsvoice_registration_attachment#key SmsvoiceRegistrationAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/smsvoice_registration_attachment#value SmsvoiceRegistrationAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceRegistrationAttachmentTagsList <a name="SmsvoiceRegistrationAttachmentTagsList" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceregistrationattachment"

smsvoiceregistrationattachment.NewSmsvoiceRegistrationAttachmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SmsvoiceRegistrationAttachmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.get"></a>

```go
func Get(index *f64) SmsvoiceRegistrationAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceRegistrationAttachmentTagsOutputReference <a name="SmsvoiceRegistrationAttachmentTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceregistrationattachment"

smsvoiceregistrationattachment.NewSmsvoiceRegistrationAttachmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SmsvoiceRegistrationAttachmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



