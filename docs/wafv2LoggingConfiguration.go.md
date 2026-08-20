# `wafv2LoggingConfiguration` Submodule <a name="`wafv2LoggingConfiguration` Submodule" id="@cdktn/provider-awscc.wafv2LoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2LoggingConfiguration <a name="Wafv2LoggingConfiguration" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration awscc_wafv2_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfiguration(scope Construct, id *string, config Wafv2LoggingConfigurationConfig) Wafv2LoggingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig">Wafv2LoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig">Wafv2LoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter">PutLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putRedactedFields">PutRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetLoggingFilter">ResetLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetRedactedFields">ResetRedactedFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingFilter` <a name="PutLoggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter"></a>

```go
func PutLoggingFilter(value Wafv2LoggingConfigurationLoggingFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

---

##### `PutRedactedFields` <a name="PutRedactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putRedactedFields"></a>

```go
func PutRedactedFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putRedactedFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLoggingFilter` <a name="ResetLoggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetLoggingFilter"></a>

```go
func ResetLoggingFilter()
```

##### `ResetRedactedFields` <a name="ResetRedactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetRedactedFields"></a>

```go
func ResetRedactedFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Wafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.Wafv2LoggingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.Wafv2LoggingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.Wafv2LoggingConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.Wafv2LoggingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Wafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Wafv2LoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Wafv2LoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Wafv2LoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilter">LoggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference">Wafv2LoggingConfigurationLoggingFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.managedByFirewallManager">ManagedByFirewallManager</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFields">RedactedFields</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList">Wafv2LoggingConfigurationRedactedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigsInput">LogDestinationConfigsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilterInput">LoggingFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFieldsInput">RedactedFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigs">LogDestinationConfigs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoggingFilter`<sup>Required</sup> <a name="LoggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilter"></a>

```go
func LoggingFilter() Wafv2LoggingConfigurationLoggingFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference">Wafv2LoggingConfigurationLoggingFilterOutputReference</a>

---

##### `ManagedByFirewallManager`<sup>Required</sup> <a name="ManagedByFirewallManager" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.managedByFirewallManager"></a>

```go
func ManagedByFirewallManager() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RedactedFields`<sup>Required</sup> <a name="RedactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFields"></a>

```go
func RedactedFields() Wafv2LoggingConfigurationRedactedFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList">Wafv2LoggingConfigurationRedactedFieldsList</a>

---

##### `LogDestinationConfigsInput`<sup>Optional</sup> <a name="LogDestinationConfigsInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigsInput"></a>

```go
func LogDestinationConfigsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoggingFilterInput`<sup>Optional</sup> <a name="LoggingFilterInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilterInput"></a>

```go
func LoggingFilterInput() interface{}
```

- *Type:* interface{}

---

##### `RedactedFieldsInput`<sup>Optional</sup> <a name="RedactedFieldsInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFieldsInput"></a>

```go
func RedactedFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `LogDestinationConfigs`<sup>Required</sup> <a name="LogDestinationConfigs" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigs"></a>

```go
func LogDestinationConfigs() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2LoggingConfigurationConfig <a name="Wafv2LoggingConfigurationConfig" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

&wafv2loggingconfiguration.Wafv2LoggingConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LogDestinationConfigs: *[]*string,
	ResourceArn: *string,
	LoggingFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter,
	RedactedFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.logDestinationConfigs">LogDestinationConfigs</a></code> | <code>*[]*string</code> | The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.loggingFilter">LoggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a></code> | Filtering that specifies which web requests are kept in the logs and which are dropped. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.redactedFields">RedactedFields</a></code> | <code>interface{}</code> | The parts of the request that you want to keep out of the logs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogDestinationConfigs`<sup>Required</sup> <a name="LogDestinationConfigs" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.logDestinationConfigs"></a>

```go
LogDestinationConfigs *[]*string
```

- *Type:* *[]*string

The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#log_destination_configs Wafv2LoggingConfiguration#log_destination_configs}

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#resource_arn Wafv2LoggingConfiguration#resource_arn}

---

##### `LoggingFilter`<sup>Optional</sup> <a name="LoggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.loggingFilter"></a>

```go
LoggingFilter Wafv2LoggingConfigurationLoggingFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

Filtering that specifies which web requests are kept in the logs and which are dropped.

You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#logging_filter Wafv2LoggingConfiguration#logging_filter}

---

##### `RedactedFields`<sup>Optional</sup> <a name="RedactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.redactedFields"></a>

```go
RedactedFields interface{}
```

- *Type:* interface{}

The parts of the request that you want to keep out of the logs.

For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#redacted_fields Wafv2LoggingConfiguration#redacted_fields}

---

### Wafv2LoggingConfigurationLoggingFilter <a name="Wafv2LoggingConfigurationLoggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

&wafv2loggingconfiguration.Wafv2LoggingConfigurationLoggingFilter {
	DefaultBehavior: *string,
	Filters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.defaultBehavior">DefaultBehavior</a></code> | <code>*string</code> | Default handling for logs that don't match any of the specified filtering conditions. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.filters">Filters</a></code> | <code>interface{}</code> | The filters that you want to apply to the logs. |

---

##### `DefaultBehavior`<sup>Optional</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.defaultBehavior"></a>

```go
DefaultBehavior *string
```

- *Type:* *string

Default handling for logs that don't match any of the specified filtering conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#default_behavior Wafv2LoggingConfiguration#default_behavior}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

The filters that you want to apply to the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#filters Wafv2LoggingConfiguration#filters}

---

### Wafv2LoggingConfigurationLoggingFilterFilters <a name="Wafv2LoggingConfigurationLoggingFilterFilters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

&wafv2loggingconfiguration.Wafv2LoggingConfigurationLoggingFilterFilters {
	Behavior: *string,
	Conditions: interface{},
	Requirement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.behavior">Behavior</a></code> | <code>*string</code> | How to handle logs that satisfy the filter's conditions and requirement. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.conditions">Conditions</a></code> | <code>interface{}</code> | Match conditions for the filter. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.requirement">Requirement</a></code> | <code>*string</code> | Logic to apply to the filtering conditions. |

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

How to handle logs that satisfy the filter's conditions and requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#behavior Wafv2LoggingConfiguration#behavior}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

Match conditions for the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#conditions Wafv2LoggingConfiguration#conditions}

---

##### `Requirement`<sup>Optional</sup> <a name="Requirement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.requirement"></a>

```go
Requirement *string
```

- *Type:* *string

Logic to apply to the filtering conditions.

You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#requirement Wafv2LoggingConfiguration#requirement}

---

### Wafv2LoggingConfigurationLoggingFilterFiltersConditions <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

&wafv2loggingconfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions {
	ActionCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition,
	LabelNameCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.actionCondition">ActionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | A single action condition. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.labelNameCondition">LabelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | A single label name condition. |

---

##### `ActionCondition`<sup>Optional</sup> <a name="ActionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.actionCondition"></a>

```go
ActionCondition Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

A single action condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#action_condition Wafv2LoggingConfiguration#action_condition}

---

##### `LabelNameCondition`<sup>Optional</sup> <a name="LabelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.labelNameCondition"></a>

```go
LabelNameCondition Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

A single label name condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#label_name_condition Wafv2LoggingConfiguration#label_name_condition}

---

### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

&wafv2loggingconfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition {
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.property.action">Action</a></code> | <code>*string</code> | Logic to apply to the filtering conditions. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.property.action"></a>

```go
Action *string
```

- *Type:* *string

Logic to apply to the filtering conditions.

You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#action Wafv2LoggingConfiguration#action}

---

### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

&wafv2loggingconfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition {
	LabelName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.property.labelName">LabelName</a></code> | <code>*string</code> | The label name that a log record must contain in order to meet the condition. |

---

##### `LabelName`<sup>Optional</sup> <a name="LabelName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.property.labelName"></a>

```go
LabelName *string
```

- *Type:* *string

The label name that a log record must contain in order to meet the condition.

This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#label_name Wafv2LoggingConfiguration#label_name}

---

### Wafv2LoggingConfigurationRedactedFields <a name="Wafv2LoggingConfigurationRedactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

&wafv2loggingconfiguration.Wafv2LoggingConfigurationRedactedFields {
	Method: *string,
	QueryString: *string,
	SingleHeader: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader,
	UriPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.method">Method</a></code> | <code>*string</code> | Inspect the HTTP method. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.queryString">QueryString</a></code> | <code>*string</code> | Inspect the query string. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.singleHeader">SingleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | Inspect a single header. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.uriPath">UriPath</a></code> | <code>*string</code> | Inspect the request URI path. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.method"></a>

```go
Method *string
```

- *Type:* *string

Inspect the HTTP method.

The method indicates the type of operation that the request is asking the origin to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#method Wafv2LoggingConfiguration#method}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

Inspect the query string.

This is the part of a URL that appears after a ? character, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#query_string Wafv2LoggingConfiguration#query_string}

---

##### `SingleHeader`<sup>Optional</sup> <a name="SingleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.singleHeader"></a>

```go
SingleHeader Wafv2LoggingConfigurationRedactedFieldsSingleHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

Inspect a single header.

Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#single_header Wafv2LoggingConfiguration#single_header}

---

##### `UriPath`<sup>Optional</sup> <a name="UriPath" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.uriPath"></a>

```go
UriPath *string
```

- *Type:* *string

Inspect the request URI path.

This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#uri_path Wafv2LoggingConfiguration#uri_path}

---

### Wafv2LoggingConfigurationRedactedFieldsSingleHeader <a name="Wafv2LoggingConfigurationRedactedFieldsSingleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

&wafv2loggingconfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader.property.name">Name</a></code> | <code>*string</code> | The name of the query header to inspect. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the query header to inspect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wafv2_logging_configuration#name Wafv2LoggingConfiguration#name}

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName">ResetLabelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelName` <a name="ResetLabelName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName"></a>

```go
func ResetLabelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput">LabelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName">LabelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelNameInput`<sup>Optional</sup> <a name="LabelNameInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput"></a>

```go
func LabelNameInput() *string
```

- *Type:* *string

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName"></a>

```go
func LabelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationLoggingFilterFiltersConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get"></a>

```go
func Get(index *f64) Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putActionCondition">PutActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition">PutLabelNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetActionCondition">ResetActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition">ResetLabelNameCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionCondition` <a name="PutActionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putActionCondition"></a>

```go
func PutActionCondition(value Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putActionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

---

##### `PutLabelNameCondition` <a name="PutLabelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition"></a>

```go
func PutLabelNameCondition(value Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

---

##### `ResetActionCondition` <a name="ResetActionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetActionCondition"></a>

```go
func ResetActionCondition()
```

##### `ResetLabelNameCondition` <a name="ResetLabelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition"></a>

```go
func ResetLabelNameCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition">ActionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition">LabelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput">ActionConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput">LabelNameConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionCondition`<sup>Required</sup> <a name="ActionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition"></a>

```go
func ActionCondition() Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a>

---

##### `LabelNameCondition`<sup>Required</sup> <a name="LabelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition"></a>

```go
func LabelNameCondition() Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a>

---

##### `ActionConditionInput`<sup>Optional</sup> <a name="ActionConditionInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput"></a>

```go
func ActionConditionInput() interface{}
```

- *Type:* interface{}

---

##### `LabelNameConditionInput`<sup>Optional</sup> <a name="LabelNameConditionInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput"></a>

```go
func LabelNameConditionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2LoggingConfigurationLoggingFilterFiltersList <a name="Wafv2LoggingConfigurationLoggingFilterFiltersList" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationLoggingFilterFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2LoggingConfigurationLoggingFilterFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.get"></a>

```go
func Get(index *f64) Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationLoggingFilterFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetRequirement">ResetRequirement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetBehavior"></a>

```go
func ResetBehavior()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetRequirement` <a name="ResetRequirement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetRequirement"></a>

```go
func ResetRequirement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirementInput">RequirementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement">Requirement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions"></a>

```go
func Conditions() Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a>

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `RequirementInput`<sup>Optional</sup> <a name="RequirementInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirementInput"></a>

```go
func RequirementInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement"></a>

```go
func Requirement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2LoggingConfigurationLoggingFilterOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationLoggingFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2LoggingConfigurationLoggingFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetDefaultBehavior">ResetDefaultBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.putFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultBehavior` <a name="ResetDefaultBehavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetDefaultBehavior"></a>

```go
func ResetDefaultBehavior()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetFilters"></a>

```go
func ResetFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList">Wafv2LoggingConfigurationLoggingFilterFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehaviorInput">DefaultBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior">DefaultBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filters"></a>

```go
func Filters() Wafv2LoggingConfigurationLoggingFilterFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList">Wafv2LoggingConfigurationLoggingFilterFiltersList</a>

---

##### `DefaultBehaviorInput`<sup>Optional</sup> <a name="DefaultBehaviorInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehaviorInput"></a>

```go
func DefaultBehaviorInput() *string
```

- *Type:* *string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultBehavior`<sup>Required</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior"></a>

```go
func DefaultBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2LoggingConfigurationRedactedFieldsList <a name="Wafv2LoggingConfigurationRedactedFieldsList" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationRedactedFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Wafv2LoggingConfigurationRedactedFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.get"></a>

```go
func Get(index *f64) Wafv2LoggingConfigurationRedactedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2LoggingConfigurationRedactedFieldsOutputReference <a name="Wafv2LoggingConfigurationRedactedFieldsOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationRedactedFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Wafv2LoggingConfigurationRedactedFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.putSingleHeader">PutSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetSingleHeader">ResetSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetUriPath">ResetUriPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSingleHeader` <a name="PutSingleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.putSingleHeader"></a>

```go
func PutSingleHeader(value Wafv2LoggingConfigurationRedactedFieldsSingleHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.putSingleHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

---

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetSingleHeader` <a name="ResetSingleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetSingleHeader"></a>

```go
func ResetSingleHeader()
```

##### `ResetUriPath` <a name="ResetUriPath" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetUriPath"></a>

```go
func ResetUriPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader">SingleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeaderInput">SingleHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPathInput">UriPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath">UriPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SingleHeader`<sup>Required</sup> <a name="SingleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader"></a>

```go
func SingleHeader() Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a>

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `SingleHeaderInput`<sup>Optional</sup> <a name="SingleHeaderInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeaderInput"></a>

```go
func SingleHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `UriPathInput`<sup>Optional</sup> <a name="UriPathInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPathInput"></a>

```go
func UriPathInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `UriPath`<sup>Required</sup> <a name="UriPath" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath"></a>

```go
func UriPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference <a name="Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wafv2loggingconfiguration"

wafv2loggingconfiguration.NewWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



