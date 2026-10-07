# `applicationsignalsInstrumentationConfig` Submodule <a name="`applicationsignalsInstrumentationConfig` Submodule" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationsignalsInstrumentationConfig <a name="ApplicationsignalsInstrumentationConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.NewApplicationsignalsInstrumentationConfig(scope Construct, id *string, config ApplicationsignalsInstrumentationConfigConfig) ApplicationsignalsInstrumentationConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig">ApplicationsignalsInstrumentationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig">ApplicationsignalsInstrumentationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration">PutCaptureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters">ResetAttributeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCaptureConfiguration` <a name="PutCaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration"></a>

```go
func PutCaptureConfiguration(value ApplicationsignalsInstrumentationConfigCaptureConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation"></a>

```go
func PutLocation(value ApplicationsignalsInstrumentationConfigLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttributeFilters` <a name="ResetAttributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters"></a>

```go
func ResetAttributeFilters()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt"></a>

```go
func ResetExpiresAt()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApplicationsignalsInstrumentationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApplicationsignalsInstrumentationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationsignalsInstrumentationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration">CaptureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash">LocationHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput">AttributeFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput">CaptureConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput">ExpiresAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput">InstrumentationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput">LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput">SignalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters">AttributeFilters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType">InstrumentationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType">SignalType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CaptureConfiguration`<sup>Required</sup> <a name="CaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration"></a>

```go
func CaptureConfiguration() ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location"></a>

```go
func Location() ApplicationsignalsInstrumentationConfigLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a>

---

##### `LocationHash`<sup>Required</sup> <a name="LocationHash" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash"></a>

```go
func LocationHash() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags"></a>

```go
func Tags() ApplicationsignalsInstrumentationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a>

---

##### `AttributeFiltersInput`<sup>Optional</sup> <a name="AttributeFiltersInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput"></a>

```go
func AttributeFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `CaptureConfigurationInput`<sup>Optional</sup> <a name="CaptureConfigurationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput"></a>

```go
func CaptureConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput"></a>

```go
func ExpiresAtInput() *string
```

- *Type:* *string

---

##### `InstrumentationTypeInput`<sup>Optional</sup> <a name="InstrumentationTypeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput"></a>

```go
func InstrumentationTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput"></a>

```go
func LocationInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SignalTypeInput`<sup>Optional</sup> <a name="SignalTypeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput"></a>

```go
func SignalTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AttributeFilters`<sup>Required</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters"></a>

```go
func AttributeFilters() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `InstrumentationType`<sup>Required</sup> <a name="InstrumentationType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType"></a>

```go
func InstrumentationType() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `SignalType`<sup>Required</sup> <a name="SignalType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType"></a>

```go
func SignalType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfiguration <a name="ApplicationsignalsInstrumentationConfigCaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

&applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration {
	CodeCapture: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture">CodeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | Defines what data to capture for code-level instrumentation. |

---

##### `CodeCapture`<sup>Required</sup> <a name="CodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture"></a>

```go
CodeCapture ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

Defines what data to capture for code-level instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_capture ApplicationsignalsInstrumentationConfig#code_capture}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

&applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture {
	CaptureLimits: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits,
	CaptureArguments: *[]*string,
	CaptureLocals: *[]*string,
	CaptureReturn: interface{},
	CaptureStackTrace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits">CaptureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | Safety limits that bound what is captured. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments">CaptureArguments</a></code> | <code>*[]*string</code> | The function arguments to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals">CaptureLocals</a></code> | <code>*[]*string</code> | The local variables to capture by name. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn">CaptureReturn</a></code> | <code>interface{}</code> | Whether to capture the return value. Defaults to false. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace">CaptureStackTrace</a></code> | <code>interface{}</code> | Whether to capture a stack trace. Defaults to true. |

---

##### `CaptureLimits`<sup>Required</sup> <a name="CaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits"></a>

```go
CaptureLimits ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

Safety limits that bound what is captured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_limits ApplicationsignalsInstrumentationConfig#capture_limits}

---

##### `CaptureArguments`<sup>Optional</sup> <a name="CaptureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments"></a>

```go
CaptureArguments *[]*string
```

- *Type:* *[]*string

The function arguments to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_arguments ApplicationsignalsInstrumentationConfig#capture_arguments}

---

##### `CaptureLocals`<sup>Optional</sup> <a name="CaptureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals"></a>

```go
CaptureLocals *[]*string
```

- *Type:* *[]*string

The local variables to capture by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_locals ApplicationsignalsInstrumentationConfig#capture_locals}

---

##### `CaptureReturn`<sup>Optional</sup> <a name="CaptureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn"></a>

```go
CaptureReturn interface{}
```

- *Type:* interface{}

Whether to capture the return value. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_return ApplicationsignalsInstrumentationConfig#capture_return}

---

##### `CaptureStackTrace`<sup>Optional</sup> <a name="CaptureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace"></a>

```go
CaptureStackTrace interface{}
```

- *Type:* interface{}

Whether to capture a stack trace. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_stack_trace ApplicationsignalsInstrumentationConfig#capture_stack_trace}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

&applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits {
	MaxCollectionDepth: *f64,
	MaxCollectionWidth: *f64,
	MaxFieldsPerObject: *f64,
	MaxHits: *f64,
	MaxObjectDepth: *f64,
	MaxStackFrames: *f64,
	MaxStackTraceSize: *f64,
	MaxStringLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth">MaxCollectionDepth</a></code> | <code>*f64</code> | Maximum nesting depth to traverse inside collections. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth">MaxCollectionWidth</a></code> | <code>*f64</code> | Maximum number of items to capture from any collection. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject">MaxFieldsPerObject</a></code> | <code>*f64</code> | Maximum number of fields to capture for any object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits">MaxHits</a></code> | <code>*f64</code> | Maximum number of times the instrumentation point can be hit before disabled. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth">MaxObjectDepth</a></code> | <code>*f64</code> | Maximum depth for nested object traversal. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames">MaxStackFrames</a></code> | <code>*f64</code> | Maximum number of stack frames to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize">MaxStackTraceSize</a></code> | <code>*f64</code> | Maximum total size in bytes of a captured stack trace. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength">MaxStringLength</a></code> | <code>*f64</code> | Maximum length of captured string values in characters. |

---

##### `MaxCollectionDepth`<sup>Optional</sup> <a name="MaxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth"></a>

```go
MaxCollectionDepth *f64
```

- *Type:* *f64

Maximum nesting depth to traverse inside collections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_depth ApplicationsignalsInstrumentationConfig#max_collection_depth}

---

##### `MaxCollectionWidth`<sup>Optional</sup> <a name="MaxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth"></a>

```go
MaxCollectionWidth *f64
```

- *Type:* *f64

Maximum number of items to capture from any collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_width ApplicationsignalsInstrumentationConfig#max_collection_width}

---

##### `MaxFieldsPerObject`<sup>Optional</sup> <a name="MaxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject"></a>

```go
MaxFieldsPerObject *f64
```

- *Type:* *f64

Maximum number of fields to capture for any object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_fields_per_object ApplicationsignalsInstrumentationConfig#max_fields_per_object}

---

##### `MaxHits`<sup>Optional</sup> <a name="MaxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits"></a>

```go
MaxHits *f64
```

- *Type:* *f64

Maximum number of times the instrumentation point can be hit before disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_hits ApplicationsignalsInstrumentationConfig#max_hits}

---

##### `MaxObjectDepth`<sup>Optional</sup> <a name="MaxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth"></a>

```go
MaxObjectDepth *f64
```

- *Type:* *f64

Maximum depth for nested object traversal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_object_depth ApplicationsignalsInstrumentationConfig#max_object_depth}

---

##### `MaxStackFrames`<sup>Optional</sup> <a name="MaxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames"></a>

```go
MaxStackFrames *f64
```

- *Type:* *f64

Maximum number of stack frames to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_frames ApplicationsignalsInstrumentationConfig#max_stack_frames}

---

##### `MaxStackTraceSize`<sup>Optional</sup> <a name="MaxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize"></a>

```go
MaxStackTraceSize *f64
```

- *Type:* *f64

Maximum total size in bytes of a captured stack trace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_trace_size ApplicationsignalsInstrumentationConfig#max_stack_trace_size}

---

##### `MaxStringLength`<sup>Optional</sup> <a name="MaxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength"></a>

```go
MaxStringLength *f64
```

- *Type:* *f64

Maximum length of captured string values in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_string_length ApplicationsignalsInstrumentationConfig#max_string_length}

---

### ApplicationsignalsInstrumentationConfigConfig <a name="ApplicationsignalsInstrumentationConfigConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

&applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CaptureConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration,
	Environment: *string,
	InstrumentationType: *string,
	Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation,
	Service: *string,
	SignalType: *string,
	AttributeFilters: interface{},
	Description: *string,
	ExpiresAt: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration">CaptureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | Specifies what to capture when the instrumentation point is hit. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment">Environment</a></code> | <code>*string</code> | The environment that the service is running in. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType">InstrumentationType</a></code> | <code>*string</code> | Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted). |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | The location where instrumentation should be applied. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service">Service</a></code> | <code>*string</code> | The name of the service to instrument. This should match the service.name resource attribute reported by the application. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType">SignalType</a></code> | <code>*string</code> | The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters">AttributeFilters</a></code> | <code>interface{}</code> | Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description">Description</a></code> | <code>*string</code> | An optional short description that explains the purpose of this instrumentation. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An optional list of key-value pairs to associate with the instrumentation configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaptureConfiguration`<sup>Required</sup> <a name="CaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration"></a>

```go
CaptureConfiguration ApplicationsignalsInstrumentationConfigCaptureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

Specifies what to capture when the instrumentation point is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_configuration ApplicationsignalsInstrumentationConfig#capture_configuration}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The environment that the service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#environment ApplicationsignalsInstrumentationConfig#environment}

---

##### `InstrumentationType`<sup>Required</sup> <a name="InstrumentationType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType"></a>

```go
InstrumentationType *string
```

- *Type:* *string

Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#instrumentation_type ApplicationsignalsInstrumentationConfig#instrumentation_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location"></a>

```go
Location ApplicationsignalsInstrumentationConfigLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

The location where instrumentation should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#location ApplicationsignalsInstrumentationConfig#location}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service to instrument. This should match the service.name resource attribute reported by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#service ApplicationsignalsInstrumentationConfig#service}

---

##### `SignalType`<sup>Required</sup> <a name="SignalType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType"></a>

```go
SignalType *string
```

- *Type:* *string

The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#signal_type ApplicationsignalsInstrumentationConfig#signal_type}

---

##### `AttributeFilters`<sup>Optional</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters"></a>

```go
AttributeFilters interface{}
```

- *Type:* interface{}

Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#attribute_filters ApplicationsignalsInstrumentationConfig#attribute_filters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional short description that explains the purpose of this instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#description ApplicationsignalsInstrumentationConfig#description}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt"></a>

```go
ExpiresAt *string
```

- *Type:* *string

The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#expires_at ApplicationsignalsInstrumentationConfig#expires_at}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An optional list of key-value pairs to associate with the instrumentation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#tags ApplicationsignalsInstrumentationConfig#tags}

---

### ApplicationsignalsInstrumentationConfigLocation <a name="ApplicationsignalsInstrumentationConfigLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

&applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfigLocation {
	CodeLocation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation">CodeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | Identifies a code location to instrument. |

---

##### `CodeLocation`<sup>Required</sup> <a name="CodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation"></a>

```go
CodeLocation ApplicationsignalsInstrumentationConfigLocationCodeLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

Identifies a code location to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_location ApplicationsignalsInstrumentationConfig#code_location}

---

### ApplicationsignalsInstrumentationConfigLocationCodeLocation <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

&applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation {
	FilePath: *string,
	Language: *string,
	ClassName: *string,
	CodeUnit: *string,
	LineNumber: *f64,
	MethodName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath">FilePath</a></code> | <code>*string</code> | The source file path relative to the project or source root. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language">Language</a></code> | <code>*string</code> | The programming language for this instrumentation point. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className">ClassName</a></code> | <code>*string</code> | The class or type name that contains the method. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit">CodeUnit</a></code> | <code>*string</code> | The package, module, or namespace that contains the target code. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber">LineNumber</a></code> | <code>*f64</code> | The line number to instrument. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName">MethodName</a></code> | <code>*string</code> | The method or function name to instrument. |

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

The source file path relative to the project or source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#file_path ApplicationsignalsInstrumentationConfig#file_path}

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language"></a>

```go
Language *string
```

- *Type:* *string

The programming language for this instrumentation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#language ApplicationsignalsInstrumentationConfig#language}

---

##### `ClassName`<sup>Optional</sup> <a name="ClassName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className"></a>

```go
ClassName *string
```

- *Type:* *string

The class or type name that contains the method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#class_name ApplicationsignalsInstrumentationConfig#class_name}

---

##### `CodeUnit`<sup>Optional</sup> <a name="CodeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit"></a>

```go
CodeUnit *string
```

- *Type:* *string

The package, module, or namespace that contains the target code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_unit ApplicationsignalsInstrumentationConfig#code_unit}

---

##### `LineNumber`<sup>Optional</sup> <a name="LineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber"></a>

```go
LineNumber *f64
```

- *Type:* *f64

The line number to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#line_number ApplicationsignalsInstrumentationConfig#line_number}

---

##### `MethodName`<sup>Optional</sup> <a name="MethodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName"></a>

```go
MethodName *string
```

- *Type:* *string

The method or function name to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#method_name ApplicationsignalsInstrumentationConfig#method_name}

---

### ApplicationsignalsInstrumentationConfigTags <a name="ApplicationsignalsInstrumentationConfigTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

&applicationsignalsinstrumentationconfig.ApplicationsignalsInstrumentationConfigTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#key ApplicationsignalsInstrumentationConfig#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#value ApplicationsignalsInstrumentationConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.NewApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth">ResetMaxCollectionDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth">ResetMaxCollectionWidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject">ResetMaxFieldsPerObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits">ResetMaxHits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth">ResetMaxObjectDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames">ResetMaxStackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize">ResetMaxStackTraceSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength">ResetMaxStringLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxCollectionDepth` <a name="ResetMaxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth"></a>

```go
func ResetMaxCollectionDepth()
```

##### `ResetMaxCollectionWidth` <a name="ResetMaxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth"></a>

```go
func ResetMaxCollectionWidth()
```

##### `ResetMaxFieldsPerObject` <a name="ResetMaxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject"></a>

```go
func ResetMaxFieldsPerObject()
```

##### `ResetMaxHits` <a name="ResetMaxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits"></a>

```go
func ResetMaxHits()
```

##### `ResetMaxObjectDepth` <a name="ResetMaxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth"></a>

```go
func ResetMaxObjectDepth()
```

##### `ResetMaxStackFrames` <a name="ResetMaxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames"></a>

```go
func ResetMaxStackFrames()
```

##### `ResetMaxStackTraceSize` <a name="ResetMaxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize"></a>

```go
func ResetMaxStackTraceSize()
```

##### `ResetMaxStringLength` <a name="ResetMaxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength"></a>

```go
func ResetMaxStringLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput">MaxCollectionDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput">MaxCollectionWidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput">MaxFieldsPerObjectInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput">MaxHitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput">MaxObjectDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput">MaxStackFramesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput">MaxStackTraceSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput">MaxStringLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth">MaxCollectionDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth">MaxCollectionWidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject">MaxFieldsPerObject</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits">MaxHits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth">MaxObjectDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames">MaxStackFrames</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize">MaxStackTraceSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength">MaxStringLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCollectionDepthInput`<sup>Optional</sup> <a name="MaxCollectionDepthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput"></a>

```go
func MaxCollectionDepthInput() *f64
```

- *Type:* *f64

---

##### `MaxCollectionWidthInput`<sup>Optional</sup> <a name="MaxCollectionWidthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput"></a>

```go
func MaxCollectionWidthInput() *f64
```

- *Type:* *f64

---

##### `MaxFieldsPerObjectInput`<sup>Optional</sup> <a name="MaxFieldsPerObjectInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput"></a>

```go
func MaxFieldsPerObjectInput() *f64
```

- *Type:* *f64

---

##### `MaxHitsInput`<sup>Optional</sup> <a name="MaxHitsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput"></a>

```go
func MaxHitsInput() *f64
```

- *Type:* *f64

---

##### `MaxObjectDepthInput`<sup>Optional</sup> <a name="MaxObjectDepthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput"></a>

```go
func MaxObjectDepthInput() *f64
```

- *Type:* *f64

---

##### `MaxStackFramesInput`<sup>Optional</sup> <a name="MaxStackFramesInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput"></a>

```go
func MaxStackFramesInput() *f64
```

- *Type:* *f64

---

##### `MaxStackTraceSizeInput`<sup>Optional</sup> <a name="MaxStackTraceSizeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput"></a>

```go
func MaxStackTraceSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxStringLengthInput`<sup>Optional</sup> <a name="MaxStringLengthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput"></a>

```go
func MaxStringLengthInput() *f64
```

- *Type:* *f64

---

##### `MaxCollectionDepth`<sup>Required</sup> <a name="MaxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth"></a>

```go
func MaxCollectionDepth() *f64
```

- *Type:* *f64

---

##### `MaxCollectionWidth`<sup>Required</sup> <a name="MaxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth"></a>

```go
func MaxCollectionWidth() *f64
```

- *Type:* *f64

---

##### `MaxFieldsPerObject`<sup>Required</sup> <a name="MaxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject"></a>

```go
func MaxFieldsPerObject() *f64
```

- *Type:* *f64

---

##### `MaxHits`<sup>Required</sup> <a name="MaxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits"></a>

```go
func MaxHits() *f64
```

- *Type:* *f64

---

##### `MaxObjectDepth`<sup>Required</sup> <a name="MaxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth"></a>

```go
func MaxObjectDepth() *f64
```

- *Type:* *f64

---

##### `MaxStackFrames`<sup>Required</sup> <a name="MaxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames"></a>

```go
func MaxStackFrames() *f64
```

- *Type:* *f64

---

##### `MaxStackTraceSize`<sup>Required</sup> <a name="MaxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize"></a>

```go
func MaxStackTraceSize() *f64
```

- *Type:* *f64

---

##### `MaxStringLength`<sup>Required</sup> <a name="MaxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength"></a>

```go
func MaxStringLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.NewApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits">PutCaptureLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments">ResetCaptureArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals">ResetCaptureLocals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn">ResetCaptureReturn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace">ResetCaptureStackTrace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaptureLimits` <a name="PutCaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits"></a>

```go
func PutCaptureLimits(value ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---

##### `ResetCaptureArguments` <a name="ResetCaptureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments"></a>

```go
func ResetCaptureArguments()
```

##### `ResetCaptureLocals` <a name="ResetCaptureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals"></a>

```go
func ResetCaptureLocals()
```

##### `ResetCaptureReturn` <a name="ResetCaptureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn"></a>

```go
func ResetCaptureReturn()
```

##### `ResetCaptureStackTrace` <a name="ResetCaptureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace"></a>

```go
func ResetCaptureStackTrace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits">CaptureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput">CaptureArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput">CaptureLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput">CaptureLocalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput">CaptureReturnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput">CaptureStackTraceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments">CaptureArguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals">CaptureLocals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn">CaptureReturn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace">CaptureStackTrace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaptureLimits`<sup>Required</sup> <a name="CaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits"></a>

```go
func CaptureLimits() ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a>

---

##### `CaptureArgumentsInput`<sup>Optional</sup> <a name="CaptureArgumentsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput"></a>

```go
func CaptureArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CaptureLimitsInput`<sup>Optional</sup> <a name="CaptureLimitsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput"></a>

```go
func CaptureLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `CaptureLocalsInput`<sup>Optional</sup> <a name="CaptureLocalsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput"></a>

```go
func CaptureLocalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CaptureReturnInput`<sup>Optional</sup> <a name="CaptureReturnInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput"></a>

```go
func CaptureReturnInput() interface{}
```

- *Type:* interface{}

---

##### `CaptureStackTraceInput`<sup>Optional</sup> <a name="CaptureStackTraceInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput"></a>

```go
func CaptureStackTraceInput() interface{}
```

- *Type:* interface{}

---

##### `CaptureArguments`<sup>Required</sup> <a name="CaptureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments"></a>

```go
func CaptureArguments() *[]*string
```

- *Type:* *[]*string

---

##### `CaptureLocals`<sup>Required</sup> <a name="CaptureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals"></a>

```go
func CaptureLocals() *[]*string
```

- *Type:* *[]*string

---

##### `CaptureReturn`<sup>Required</sup> <a name="CaptureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn"></a>

```go
func CaptureReturn() interface{}
```

- *Type:* interface{}

---

##### `CaptureStackTrace`<sup>Required</sup> <a name="CaptureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace"></a>

```go
func CaptureStackTrace() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.NewApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture">PutCodeCapture</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeCapture` <a name="PutCodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture"></a>

```go
func PutCodeCapture(value ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture">CodeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput">CodeCaptureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeCapture`<sup>Required</sup> <a name="CodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture"></a>

```go
func CodeCapture() ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a>

---

##### `CodeCaptureInput`<sup>Optional</sup> <a name="CodeCaptureInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput"></a>

```go
func CodeCaptureInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.NewApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName">ResetClassName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit">ResetCodeUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber">ResetLineNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName">ResetMethodName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassName` <a name="ResetClassName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName"></a>

```go
func ResetClassName()
```

##### `ResetCodeUnit` <a name="ResetCodeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit"></a>

```go
func ResetCodeUnit()
```

##### `ResetLineNumber` <a name="ResetLineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber"></a>

```go
func ResetLineNumber()
```

##### `ResetMethodName` <a name="ResetMethodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName"></a>

```go
func ResetMethodName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput">ClassNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput">CodeUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput">LineNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput">MethodNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className">ClassName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit">CodeUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber">LineNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName">MethodName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput"></a>

```go
func ClassNameInput() *string
```

- *Type:* *string

---

##### `CodeUnitInput`<sup>Optional</sup> <a name="CodeUnitInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput"></a>

```go
func CodeUnitInput() *string
```

- *Type:* *string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `LineNumberInput`<sup>Optional</sup> <a name="LineNumberInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput"></a>

```go
func LineNumberInput() *f64
```

- *Type:* *f64

---

##### `MethodNameInput`<sup>Optional</sup> <a name="MethodNameInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput"></a>

```go
func MethodNameInput() *string
```

- *Type:* *string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className"></a>

```go
func ClassName() *string
```

- *Type:* *string

---

##### `CodeUnit`<sup>Required</sup> <a name="CodeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit"></a>

```go
func CodeUnit() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `LineNumber`<sup>Required</sup> <a name="LineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber"></a>

```go
func LineNumber() *f64
```

- *Type:* *f64

---

##### `MethodName`<sup>Required</sup> <a name="MethodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName"></a>

```go
func MethodName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationsignalsInstrumentationConfigLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.NewApplicationsignalsInstrumentationConfigLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationsignalsInstrumentationConfigLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation">PutCodeLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeLocation` <a name="PutCodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation"></a>

```go
func PutCodeLocation(value ApplicationsignalsInstrumentationConfigLocationCodeLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation">CodeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput">CodeLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeLocation`<sup>Required</sup> <a name="CodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation"></a>

```go
func CodeLocation() ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a>

---

##### `CodeLocationInput`<sup>Optional</sup> <a name="CodeLocationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput"></a>

```go
func CodeLocationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationsignalsInstrumentationConfigTagsList <a name="ApplicationsignalsInstrumentationConfigTagsList" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.NewApplicationsignalsInstrumentationConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationsignalsInstrumentationConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get"></a>

```go
func Get(index *f64) ApplicationsignalsInstrumentationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationsignalsInstrumentationConfigTagsOutputReference <a name="ApplicationsignalsInstrumentationConfigTagsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/applicationsignalsinstrumentationconfig"

applicationsignalsinstrumentationconfig.NewApplicationsignalsInstrumentationConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationsignalsInstrumentationConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



