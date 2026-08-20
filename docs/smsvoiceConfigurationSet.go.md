# `smsvoiceConfigurationSet` Submodule <a name="`smsvoiceConfigurationSet` Submodule" id="@cdktn/provider-awscc.smsvoiceConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceConfigurationSet <a name="SmsvoiceConfigurationSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set awscc_smsvoice_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.NewSmsvoiceConfigurationSet(scope Construct, id *string, config SmsvoiceConfigurationSetConfig) SmsvoiceConfigurationSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig">SmsvoiceConfigurationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig">SmsvoiceConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations">PutEventDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName">ResetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId">ResetDefaultSenderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations">ResetEventDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled">ResetMessageFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId">ResetProtectConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventDestinations` <a name="PutEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations"></a>

```go
func PutEventDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfigurationSetName` <a name="ResetConfigurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName"></a>

```go
func ResetConfigurationSetName()
```

##### `ResetDefaultSenderId` <a name="ResetDefaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId"></a>

```go
func ResetDefaultSenderId()
```

##### `ResetEventDestinations` <a name="ResetEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations"></a>

```go
func ResetEventDestinations()
```

##### `ResetMessageFeedbackEnabled` <a name="ResetMessageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled"></a>

```go
func ResetMessageFeedbackEnabled()
```

##### `ResetProtectConfigurationId` <a name="ResetProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId"></a>

```go
func ResetProtectConfigurationId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.SmsvoiceConfigurationSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.SmsvoiceConfigurationSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.SmsvoiceConfigurationSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.SmsvoiceConfigurationSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SmsvoiceConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SmsvoiceConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations">EventDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput">DefaultSenderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput">EventDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput">MessageFeedbackEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput">ProtectConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId">DefaultSenderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled">MessageFeedbackEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EventDestinations`<sup>Required</sup> <a name="EventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations"></a>

```go
func EventDestinations() SmsvoiceConfigurationSetEventDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags"></a>

```go
func Tags() SmsvoiceConfigurationSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a>

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput"></a>

```go
func ConfigurationSetNameInput() *string
```

- *Type:* *string

---

##### `DefaultSenderIdInput`<sup>Optional</sup> <a name="DefaultSenderIdInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput"></a>

```go
func DefaultSenderIdInput() *string
```

- *Type:* *string

---

##### `EventDestinationsInput`<sup>Optional</sup> <a name="EventDestinationsInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput"></a>

```go
func EventDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `MessageFeedbackEnabledInput`<sup>Optional</sup> <a name="MessageFeedbackEnabledInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput"></a>

```go
func MessageFeedbackEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectConfigurationIdInput`<sup>Optional</sup> <a name="ProtectConfigurationIdInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput"></a>

```go
func ProtectConfigurationIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName"></a>

```go
func ConfigurationSetName() *string
```

- *Type:* *string

---

##### `DefaultSenderId`<sup>Required</sup> <a name="DefaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId"></a>

```go
func DefaultSenderId() *string
```

- *Type:* *string

---

##### `MessageFeedbackEnabled`<sup>Required</sup> <a name="MessageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled"></a>

```go
func MessageFeedbackEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProtectConfigurationId`<sup>Required</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId"></a>

```go
func ProtectConfigurationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceConfigurationSetConfig <a name="SmsvoiceConfigurationSetConfig" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

&smsvoiceconfigurationset.SmsvoiceConfigurationSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigurationSetName: *string,
	DefaultSenderId: *string,
	EventDestinations: interface{},
	MessageFeedbackEnabled: interface{},
	ProtectConfigurationId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | The name to use for the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId">DefaultSenderId</a></code> | <code>*string</code> | The default sender ID to set for the ConfigurationSet. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations">EventDestinations</a></code> | <code>interface{}</code> | An event destination is a location where you send message events. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled">MessageFeedbackEnabled</a></code> | <code>interface{}</code> | Set to true to enable message feedback. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>*string</code> | The unique identifier for the protect configuration to be associated to the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationSetName`<sup>Optional</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName"></a>

```go
ConfigurationSetName *string
```

- *Type:* *string

The name to use for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#configuration_set_name SmsvoiceConfigurationSet#configuration_set_name}

---

##### `DefaultSenderId`<sup>Optional</sup> <a name="DefaultSenderId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId"></a>

```go
DefaultSenderId *string
```

- *Type:* *string

The default sender ID to set for the ConfigurationSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#default_sender_id SmsvoiceConfigurationSet#default_sender_id}

---

##### `EventDestinations`<sup>Optional</sup> <a name="EventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations"></a>

```go
EventDestinations interface{}
```

- *Type:* interface{}

An event destination is a location where you send message events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#event_destinations SmsvoiceConfigurationSet#event_destinations}

---

##### `MessageFeedbackEnabled`<sup>Optional</sup> <a name="MessageFeedbackEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled"></a>

```go
MessageFeedbackEnabled interface{}
```

- *Type:* interface{}

Set to true to enable message feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#message_feedback_enabled SmsvoiceConfigurationSet#message_feedback_enabled}

---

##### `ProtectConfigurationId`<sup>Optional</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId"></a>

```go
ProtectConfigurationId *string
```

- *Type:* *string

The unique identifier for the protect configuration to be associated to the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#protect_configuration_id SmsvoiceConfigurationSet#protect_configuration_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#tags SmsvoiceConfigurationSet#tags}

---

### SmsvoiceConfigurationSetEventDestinations <a name="SmsvoiceConfigurationSetEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

&smsvoiceconfigurationset.SmsvoiceConfigurationSetEventDestinations {
	CloudwatchLogsDestination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination,
	Enabled: interface{},
	EventDestinationName: *string,
	KinesisFirehoseDestination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination,
	MatchingEventTypes: *[]*string,
	SnsDestination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination">CloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled">Enabled</a></code> | <code>interface{}</code> | When set to true events will be logged. By default this is set to true. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName">EventDestinationName</a></code> | <code>*string</code> | The name that identifies the event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination">KinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes">MatchingEventTypes</a></code> | <code>*[]*string</code> | An array of event types that determine which events to log. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | An object that contains SNS TopicArn event destination. |

---

##### `CloudwatchLogsDestination`<sup>Optional</sup> <a name="CloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination"></a>

```go
CloudwatchLogsDestination SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#cloudwatch_logs_destination SmsvoiceConfigurationSet#cloudwatch_logs_destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

When set to true events will be logged. By default this is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#enabled SmsvoiceConfigurationSet#enabled}

---

##### `EventDestinationName`<sup>Optional</sup> <a name="EventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName"></a>

```go
EventDestinationName *string
```

- *Type:* *string

The name that identifies the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#event_destination_name SmsvoiceConfigurationSet#event_destination_name}

---

##### `KinesisFirehoseDestination`<sup>Optional</sup> <a name="KinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination"></a>

```go
KinesisFirehoseDestination SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#kinesis_firehose_destination SmsvoiceConfigurationSet#kinesis_firehose_destination}

---

##### `MatchingEventTypes`<sup>Optional</sup> <a name="MatchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes"></a>

```go
MatchingEventTypes *[]*string
```

- *Type:* *[]*string

An array of event types that determine which events to log.

If 'ALL' is used, then AWS End User Messaging SMS and Voice logs every event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#matching_event_types SmsvoiceConfigurationSet#matching_event_types}

---

##### `SnsDestination`<sup>Optional</sup> <a name="SnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination"></a>

```go
SnsDestination SmsvoiceConfigurationSetEventDestinationsSnsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

An object that contains SNS TopicArn event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#sns_destination SmsvoiceConfigurationSet#sns_destination}

---

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

&smsvoiceconfigurationset.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination {
	IamRoleArn: *string,
	LogGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | The name of the Amazon CloudWatch log group that you want to record events in. |

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn"></a>

```go
LogGroupArn *string
```

- *Type:* *string

The name of the Amazon CloudWatch log group that you want to record events in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#log_group_arn SmsvoiceConfigurationSet#log_group_arn}

---

### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

&smsvoiceconfigurationset.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination {
	DeliveryStreamArn: *string,
	IamRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn">DeliveryStreamArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the delivery stream. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |

---

##### `DeliveryStreamArn`<sup>Optional</sup> <a name="DeliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```go
DeliveryStreamArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#delivery_stream_arn SmsvoiceConfigurationSet#delivery_stream_arn}

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

### SmsvoiceConfigurationSetEventDestinationsSnsDestination <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

&smsvoiceconfigurationset.SmsvoiceConfigurationSetEventDestinationsSnsDestination {
	TopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn">TopicArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to. |

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#topic_arn SmsvoiceConfigurationSet#topic_arn}

---

### SmsvoiceConfigurationSetTags <a name="SmsvoiceConfigurationSetTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

&smsvoiceconfigurationset.SmsvoiceConfigurationSetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#key SmsvoiceConfigurationSet#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/smsvoice_configuration_set#value SmsvoiceConfigurationSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.NewSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn"></a>

```go
func ResetIamRoleArn()
```

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn"></a>

```go
func ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput"></a>

```go
func LogGroupArnInput() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.NewSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn">ResetDeliveryStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStreamArn` <a name="ResetDeliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn"></a>

```go
func ResetDeliveryStreamArn()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn"></a>

```go
func ResetIamRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">DeliveryStreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">DeliveryStreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamArnInput`<sup>Optional</sup> <a name="DeliveryStreamArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```go
func DeliveryStreamArnInput() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `DeliveryStreamArn`<sup>Required</sup> <a name="DeliveryStreamArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```go
func DeliveryStreamArn() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceConfigurationSetEventDestinationsList <a name="SmsvoiceConfigurationSetEventDestinationsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.NewSmsvoiceConfigurationSetEventDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SmsvoiceConfigurationSetEventDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get"></a>

```go
func Get(index *f64) SmsvoiceConfigurationSetEventDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceConfigurationSetEventDestinationsOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.NewSmsvoiceConfigurationSetEventDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SmsvoiceConfigurationSetEventDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination">PutCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination">PutKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination">PutSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination">ResetCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName">ResetEventDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination">ResetKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes">ResetMatchingEventTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination">ResetSnsDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogsDestination` <a name="PutCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination"></a>

```go
func PutCloudwatchLogsDestination(value SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---

##### `PutKinesisFirehoseDestination` <a name="PutKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination"></a>

```go
func PutKinesisFirehoseDestination(value SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---

##### `PutSnsDestination` <a name="PutSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination"></a>

```go
func PutSnsDestination(value SmsvoiceConfigurationSetEventDestinationsSnsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---

##### `ResetCloudwatchLogsDestination` <a name="ResetCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination"></a>

```go
func ResetCloudwatchLogsDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEventDestinationName` <a name="ResetEventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName"></a>

```go
func ResetEventDestinationName()
```

##### `ResetKinesisFirehoseDestination` <a name="ResetKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination"></a>

```go
func ResetKinesisFirehoseDestination()
```

##### `ResetMatchingEventTypes` <a name="ResetMatchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes"></a>

```go
func ResetMatchingEventTypes()
```

##### `ResetSnsDestination` <a name="ResetSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination"></a>

```go
func ResetSnsDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination">CloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination">KinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput">CloudwatchLogsDestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput">EventDestinationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput">KinesisFirehoseDestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput">MatchingEventTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput">SnsDestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName">EventDestinationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes">MatchingEventTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsDestination`<sup>Required</sup> <a name="CloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination"></a>

```go
func CloudwatchLogsDestination() SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a>

---

##### `KinesisFirehoseDestination`<sup>Required</sup> <a name="KinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination"></a>

```go
func KinesisFirehoseDestination() SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a>

---

##### `SnsDestination`<sup>Required</sup> <a name="SnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination"></a>

```go
func SnsDestination() SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a>

---

##### `CloudwatchLogsDestinationInput`<sup>Optional</sup> <a name="CloudwatchLogsDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput"></a>

```go
func CloudwatchLogsDestinationInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventDestinationNameInput`<sup>Optional</sup> <a name="EventDestinationNameInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput"></a>

```go
func EventDestinationNameInput() *string
```

- *Type:* *string

---

##### `KinesisFirehoseDestinationInput`<sup>Optional</sup> <a name="KinesisFirehoseDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput"></a>

```go
func KinesisFirehoseDestinationInput() interface{}
```

- *Type:* interface{}

---

##### `MatchingEventTypesInput`<sup>Optional</sup> <a name="MatchingEventTypesInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput"></a>

```go
func MatchingEventTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnsDestinationInput`<sup>Optional</sup> <a name="SnsDestinationInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput"></a>

```go
func SnsDestinationInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EventDestinationName`<sup>Required</sup> <a name="EventDestinationName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName"></a>

```go
func EventDestinationName() *string
```

- *Type:* *string

---

##### `MatchingEventTypes`<sup>Required</sup> <a name="MatchingEventTypes" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes"></a>

```go
func MatchingEventTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.NewSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn"></a>

```go
func ResetTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceConfigurationSetTagsList <a name="SmsvoiceConfigurationSetTagsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.NewSmsvoiceConfigurationSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SmsvoiceConfigurationSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get"></a>

```go
func Get(index *f64) SmsvoiceConfigurationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceConfigurationSetTagsOutputReference <a name="SmsvoiceConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceconfigurationset"

smsvoiceconfigurationset.NewSmsvoiceConfigurationSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SmsvoiceConfigurationSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



