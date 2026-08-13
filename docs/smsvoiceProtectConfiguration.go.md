# `smsvoiceProtectConfiguration` Submodule <a name="`smsvoiceProtectConfiguration` Submodule" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceProtectConfiguration <a name="SmsvoiceProtectConfiguration" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfiguration(scope Construct, id *string, config SmsvoiceProtectConfigurationConfig) SmsvoiceProtectConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig">SmsvoiceProtectConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig">SmsvoiceProtectConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet">PutCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetCountryRuleSet">ResetCountryRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCountryRuleSet` <a name="PutCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet"></a>

```go
func PutCountryRuleSet(value SmsvoiceProtectConfigurationCountryRuleSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putCountryRuleSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCountryRuleSet` <a name="ResetCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetCountryRuleSet"></a>

```go
func ResetCountryRuleSet()
```

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.SmsvoiceProtectConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.SmsvoiceProtectConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.SmsvoiceProtectConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.SmsvoiceProtectConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SmsvoiceProtectConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SmsvoiceProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSet">CountryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference">SmsvoiceProtectConfigurationCountryRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.protectConfigurationId">ProtectConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList">SmsvoiceProtectConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSetInput">CountryRuleSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CountryRuleSet`<sup>Required</sup> <a name="CountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSet"></a>

```go
func CountryRuleSet() SmsvoiceProtectConfigurationCountryRuleSetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference">SmsvoiceProtectConfigurationCountryRuleSetOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProtectConfigurationId`<sup>Required</sup> <a name="ProtectConfigurationId" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.protectConfigurationId"></a>

```go
func ProtectConfigurationId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tags"></a>

```go
func Tags() SmsvoiceProtectConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList">SmsvoiceProtectConfigurationTagsList</a>

---

##### `CountryRuleSetInput`<sup>Optional</sup> <a name="CountryRuleSetInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.countryRuleSetInput"></a>

```go
func CountryRuleSetInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceProtectConfigurationConfig <a name="SmsvoiceProtectConfigurationConfig" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

&smsvoiceprotectconfiguration.SmsvoiceProtectConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CountryRuleSet: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet,
	DeletionProtectionEnabled: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.countryRuleSet">CountryRuleSet</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a></code> | An array of CountryRule containing the rules for the NumberCapability. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | When set to true deletion protection is enabled and protect configuration cannot be deleted. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CountryRuleSet`<sup>Optional</sup> <a name="CountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.countryRuleSet"></a>

```go
CountryRuleSet SmsvoiceProtectConfigurationCountryRuleSet
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet">SmsvoiceProtectConfigurationCountryRuleSet</a>

An array of CountryRule containing the rules for the NumberCapability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#country_rule_set SmsvoiceProtectConfiguration#country_rule_set}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

When set to true deletion protection is enabled and protect configuration cannot be deleted.

By default this is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#deletion_protection_enabled SmsvoiceProtectConfiguration#deletion_protection_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#tags SmsvoiceProtectConfiguration#tags}

---

### SmsvoiceProtectConfigurationCountryRuleSet <a name="SmsvoiceProtectConfigurationCountryRuleSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

&smsvoiceprotectconfiguration.SmsvoiceProtectConfigurationCountryRuleSet {
	Mms: interface{},
	Sms: interface{},
	Voice: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.mms">Mms</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#mms SmsvoiceProtectConfiguration#mms}. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.sms">Sms</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#sms SmsvoiceProtectConfiguration#sms}. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.voice">Voice</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#voice SmsvoiceProtectConfiguration#voice}. |

---

##### `Mms`<sup>Optional</sup> <a name="Mms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.mms"></a>

```go
Mms interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#mms SmsvoiceProtectConfiguration#mms}.

---

##### `Sms`<sup>Optional</sup> <a name="Sms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.sms"></a>

```go
Sms interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#sms SmsvoiceProtectConfiguration#sms}.

---

##### `Voice`<sup>Optional</sup> <a name="Voice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSet.property.voice"></a>

```go
Voice interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#voice SmsvoiceProtectConfiguration#voice}.

---

### SmsvoiceProtectConfigurationCountryRuleSetMms <a name="SmsvoiceProtectConfigurationCountryRuleSetMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

&smsvoiceprotectconfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms {
	CountryCode: *string,
	ProtectStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.countryCode">CountryCode</a></code> | <code>*string</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | The types of protection that can be used. |

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMms.property.protectStatus"></a>

```go
ProtectStatus *string
```

- *Type:* *string

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationCountryRuleSetSms <a name="SmsvoiceProtectConfigurationCountryRuleSetSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

&smsvoiceprotectconfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms {
	CountryCode: *string,
	ProtectStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.countryCode">CountryCode</a></code> | <code>*string</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | The types of protection that can be used. |

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSms.property.protectStatus"></a>

```go
ProtectStatus *string
```

- *Type:* *string

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationCountryRuleSetVoice <a name="SmsvoiceProtectConfigurationCountryRuleSetVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

&smsvoiceprotectconfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice {
	CountryCode: *string,
	ProtectStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.countryCode">CountryCode</a></code> | <code>*string</code> | The two-letter ISO country code. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | The types of protection that can be used. |

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

The two-letter ISO country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}

---

##### `ProtectStatus`<sup>Optional</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoice.property.protectStatus"></a>

```go
ProtectStatus *string
```

- *Type:* *string

The types of protection that can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}

---

### SmsvoiceProtectConfigurationTags <a name="SmsvoiceProtectConfigurationTags" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

&smsvoiceprotectconfiguration.SmsvoiceProtectConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#key SmsvoiceProtectConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/smsvoice_protect_configuration#value SmsvoiceProtectConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceProtectConfigurationCountryRuleSetMmsList <a name="SmsvoiceProtectConfigurationCountryRuleSetMmsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfigurationCountryRuleSetMmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SmsvoiceProtectConfigurationCountryRuleSetMmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get"></a>

```go
func Get(index *f64) SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.resetProtectStatus"></a>

```go
func ResetProtectStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatusInput">ProtectStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatusInput"></a>

```go
func ProtectStatusInput() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.protectStatus"></a>

```go
func ProtectStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceProtectConfigurationCountryRuleSetOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfigurationCountryRuleSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SmsvoiceProtectConfigurationCountryRuleSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms">PutMms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms">PutSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice">PutVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetMms">ResetMms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetSms">ResetSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetVoice">ResetVoice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMms` <a name="PutMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms"></a>

```go
func PutMms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putMms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSms` <a name="PutSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms"></a>

```go
func PutSms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putSms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVoice` <a name="PutVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice"></a>

```go
func PutVoice(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.putVoice.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMms` <a name="ResetMms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetMms"></a>

```go
func ResetMms()
```

##### `ResetSms` <a name="ResetSms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetSms"></a>

```go
func ResetSms()
```

##### `ResetVoice` <a name="ResetVoice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.resetVoice"></a>

```go
func ResetVoice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms">Mms</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList">SmsvoiceProtectConfigurationCountryRuleSetMmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms">Sms</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList">SmsvoiceProtectConfigurationCountryRuleSetSmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice">Voice</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList">SmsvoiceProtectConfigurationCountryRuleSetVoiceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mmsInput">MmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.smsInput">SmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voiceInput">VoiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mms`<sup>Required</sup> <a name="Mms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mms"></a>

```go
func Mms() SmsvoiceProtectConfigurationCountryRuleSetMmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetMmsList">SmsvoiceProtectConfigurationCountryRuleSetMmsList</a>

---

##### `Sms`<sup>Required</sup> <a name="Sms" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.sms"></a>

```go
func Sms() SmsvoiceProtectConfigurationCountryRuleSetSmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList">SmsvoiceProtectConfigurationCountryRuleSetSmsList</a>

---

##### `Voice`<sup>Required</sup> <a name="Voice" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voice"></a>

```go
func Voice() SmsvoiceProtectConfigurationCountryRuleSetVoiceList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList">SmsvoiceProtectConfigurationCountryRuleSetVoiceList</a>

---

##### `MmsInput`<sup>Optional</sup> <a name="MmsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.mmsInput"></a>

```go
func MmsInput() interface{}
```

- *Type:* interface{}

---

##### `SmsInput`<sup>Optional</sup> <a name="SmsInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.smsInput"></a>

```go
func SmsInput() interface{}
```

- *Type:* interface{}

---

##### `VoiceInput`<sup>Optional</sup> <a name="VoiceInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.voiceInput"></a>

```go
func VoiceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceProtectConfigurationCountryRuleSetSmsList <a name="SmsvoiceProtectConfigurationCountryRuleSetSmsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfigurationCountryRuleSetSmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SmsvoiceProtectConfigurationCountryRuleSetSmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get"></a>

```go
func Get(index *f64) SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.resetProtectStatus"></a>

```go
func ResetProtectStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatusInput">ProtectStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatusInput"></a>

```go
func ProtectStatusInput() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.protectStatus"></a>

```go
func ProtectStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceProtectConfigurationCountryRuleSetVoiceList <a name="SmsvoiceProtectConfigurationCountryRuleSetVoiceList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfigurationCountryRuleSetVoiceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SmsvoiceProtectConfigurationCountryRuleSetVoiceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get"></a>

```go
func Get(index *f64) SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference <a name="SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetProtectStatus">ResetProtectStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetProtectStatus` <a name="ResetProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.resetProtectStatus"></a>

```go
func ResetProtectStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatusInput">ProtectStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus">ProtectStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `ProtectStatusInput`<sup>Optional</sup> <a name="ProtectStatusInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatusInput"></a>

```go
func ProtectStatusInput() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.protectStatus"></a>

```go
func ProtectStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceProtectConfigurationTagsList <a name="SmsvoiceProtectConfigurationTagsList" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SmsvoiceProtectConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get"></a>

```go
func Get(index *f64) SmsvoiceProtectConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceProtectConfigurationTagsOutputReference <a name="SmsvoiceProtectConfigurationTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoiceprotectconfiguration"

smsvoiceprotectconfiguration.NewSmsvoiceProtectConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SmsvoiceProtectConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceProtectConfiguration.SmsvoiceProtectConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



