# `smsvoiceNotifyConfiguration` Submodule <a name="`smsvoiceNotifyConfiguration` Submodule" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceNotifyConfiguration <a name="SmsvoiceNotifyConfiguration" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration awscc_smsvoice_notify_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicenotifyconfiguration"

smsvoicenotifyconfiguration.NewSmsvoiceNotifyConfiguration(scope Construct, id *string, config SmsvoiceNotifyConfigurationConfig) SmsvoiceNotifyConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig">SmsvoiceNotifyConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig">SmsvoiceNotifyConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId">ResetDefaultTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries">ResetEnabledCountries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId">ResetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultTemplateId` <a name="ResetDefaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDefaultTemplateId"></a>

```go
func ResetDefaultTemplateId()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetEnabledCountries` <a name="ResetEnabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetEnabledCountries"></a>

```go
func ResetEnabledCountries()
```

##### `ResetPoolId` <a name="ResetPoolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetPoolId"></a>

```go
func ResetPoolId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicenotifyconfiguration"

smsvoicenotifyconfiguration.SmsvoiceNotifyConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicenotifyconfiguration"

smsvoicenotifyconfiguration.SmsvoiceNotifyConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicenotifyconfiguration"

smsvoicenotifyconfiguration.SmsvoiceNotifyConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicenotifyconfiguration"

smsvoicenotifyconfiguration.SmsvoiceNotifyConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SmsvoiceNotifyConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SmsvoiceNotifyConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SmsvoiceNotifyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceNotifyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn">NotifyConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId">NotifyConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus">TierUpgradeStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput">DefaultTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput">EnabledChannelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput">EnabledCountriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput">PoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput">UseCaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId">DefaultTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels">EnabledChannels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries">EnabledCountries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase">UseCase</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotifyConfigurationArn`<sup>Required</sup> <a name="NotifyConfigurationArn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationArn"></a>

```go
func NotifyConfigurationArn() *string
```

- *Type:* *string

---

##### `NotifyConfigurationId`<sup>Required</sup> <a name="NotifyConfigurationId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.notifyConfigurationId"></a>

```go
func NotifyConfigurationId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tags"></a>

```go
func Tags() SmsvoiceNotifyConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList">SmsvoiceNotifyConfigurationTagsList</a>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `TierUpgradeStatus`<sup>Required</sup> <a name="TierUpgradeStatus" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tierUpgradeStatus"></a>

```go
func TierUpgradeStatus() *string
```

- *Type:* *string

---

##### `DefaultTemplateIdInput`<sup>Optional</sup> <a name="DefaultTemplateIdInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateIdInput"></a>

```go
func DefaultTemplateIdInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledChannelsInput`<sup>Optional</sup> <a name="EnabledChannelsInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannelsInput"></a>

```go
func EnabledChannelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledCountriesInput`<sup>Optional</sup> <a name="EnabledCountriesInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountriesInput"></a>

```go
func EnabledCountriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolIdInput"></a>

```go
func PoolIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UseCaseInput`<sup>Optional</sup> <a name="UseCaseInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCaseInput"></a>

```go
func UseCaseInput() *string
```

- *Type:* *string

---

##### `DefaultTemplateId`<sup>Required</sup> <a name="DefaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.defaultTemplateId"></a>

```go
func DefaultTemplateId() *string
```

- *Type:* *string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnabledChannels`<sup>Required</sup> <a name="EnabledChannels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledChannels"></a>

```go
func EnabledChannels() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledCountries`<sup>Required</sup> <a name="EnabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.enabledCountries"></a>

```go
func EnabledCountries() *[]*string
```

- *Type:* *[]*string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.useCase"></a>

```go
func UseCase() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceNotifyConfigurationConfig <a name="SmsvoiceNotifyConfigurationConfig" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicenotifyconfiguration"

&smsvoicenotifyconfiguration.SmsvoiceNotifyConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	EnabledChannels: *[]*string,
	UseCase: *string,
	DefaultTemplateId: *string,
	DeletionProtectionEnabled: interface{},
	EnabledCountries: *[]*string,
	PoolId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels">EnabledChannels</a></code> | <code>*[]*string</code> | An array of channels to enable for the notify configuration. Supported values include SMS and VOICE. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase">UseCase</a></code> | <code>*string</code> | The use case for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId">DefaultTemplateId</a></code> | <code>*string</code> | The default template identifier to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | By default this is set to false. When set to true the notify configuration can't be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries">EnabledCountries</a></code> | <code>*[]*string</code> | An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId">PoolId</a></code> | <code>*string</code> | The identifier of the pool to associate with the notify configuration. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of tags (key and value pairs) associated with the notify configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#display_name SmsvoiceNotifyConfiguration#display_name}

---

##### `EnabledChannels`<sup>Required</sup> <a name="EnabledChannels" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledChannels"></a>

```go
EnabledChannels *[]*string
```

- *Type:* *[]*string

An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_channels SmsvoiceNotifyConfiguration#enabled_channels}

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.useCase"></a>

```go
UseCase *string
```

- *Type:* *string

The use case for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#use_case SmsvoiceNotifyConfiguration#use_case}

---

##### `DefaultTemplateId`<sup>Optional</sup> <a name="DefaultTemplateId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.defaultTemplateId"></a>

```go
DefaultTemplateId *string
```

- *Type:* *string

The default template identifier to associate with the notify configuration.

If specified, this template is used when sending messages without an explicit template identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#default_template_id SmsvoiceNotifyConfiguration#default_template_id}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

By default this is set to false. When set to true the notify configuration can't be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#deletion_protection_enabled SmsvoiceNotifyConfiguration#deletion_protection_enabled}

---

##### `EnabledCountries`<sup>Optional</sup> <a name="EnabledCountries" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.enabledCountries"></a>

```go
EnabledCountries *[]*string
```

- *Type:* *[]*string

An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#enabled_countries SmsvoiceNotifyConfiguration#enabled_countries}

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.poolId"></a>

```go
PoolId *string
```

- *Type:* *string

The identifier of the pool to associate with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#pool_id SmsvoiceNotifyConfiguration#pool_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of tags (key and value pairs) associated with the notify configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#tags SmsvoiceNotifyConfiguration#tags}

---

### SmsvoiceNotifyConfigurationTags <a name="SmsvoiceNotifyConfigurationTags" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicenotifyconfiguration"

&smsvoicenotifyconfiguration.SmsvoiceNotifyConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key">Key</a></code> | <code>*string</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value">Value</a></code> | <code>*string</code> | The string value associated with the key of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#key SmsvoiceNotifyConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_notify_configuration#value SmsvoiceNotifyConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceNotifyConfigurationTagsList <a name="SmsvoiceNotifyConfigurationTagsList" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicenotifyconfiguration"

smsvoicenotifyconfiguration.NewSmsvoiceNotifyConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SmsvoiceNotifyConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get"></a>

```go
func Get(index *f64) SmsvoiceNotifyConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceNotifyConfigurationTagsOutputReference <a name="SmsvoiceNotifyConfigurationTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicenotifyconfiguration"

smsvoicenotifyconfiguration.NewSmsvoiceNotifyConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SmsvoiceNotifyConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceNotifyConfiguration.SmsvoiceNotifyConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



