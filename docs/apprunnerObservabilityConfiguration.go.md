# `apprunnerObservabilityConfiguration` Submodule <a name="`apprunnerObservabilityConfiguration` Submodule" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerObservabilityConfiguration <a name="ApprunnerObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration awscc_apprunner_observability_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.NewApprunnerObservabilityConfiguration(scope Construct, id *string, config ApprunnerObservabilityConfigurationConfig) ApprunnerObservabilityConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig">ApprunnerObservabilityConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig">ApprunnerObservabilityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration">PutTraceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetObservabilityConfigurationName">ResetObservabilityConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTraceConfiguration">ResetTraceConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTraceConfiguration` <a name="PutTraceConfiguration" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration"></a>

```go
func PutTraceConfiguration(value ApprunnerObservabilityConfigurationTraceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

---

##### `ResetObservabilityConfigurationName` <a name="ResetObservabilityConfigurationName" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetObservabilityConfigurationName"></a>

```go
func ResetObservabilityConfigurationName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTraceConfiguration` <a name="ResetTraceConfiguration" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTraceConfiguration"></a>

```go
func ResetTraceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApprunnerObservabilityConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.ApprunnerObservabilityConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.ApprunnerObservabilityConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.ApprunnerObservabilityConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.ApprunnerObservabilityConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApprunnerObservabilityConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApprunnerObservabilityConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApprunnerObservabilityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerObservabilityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.latest">Latest</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationArn">ObservabilityConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision">ObservabilityConfigurationRevision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList">ApprunnerObservabilityConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfiguration">TraceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference">ApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationNameInput">ObservabilityConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfigurationInput">TraceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationName">ObservabilityConfigurationName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.latest"></a>

```go
func Latest() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ObservabilityConfigurationArn`<sup>Required</sup> <a name="ObservabilityConfigurationArn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationArn"></a>

```go
func ObservabilityConfigurationArn() *string
```

- *Type:* *string

---

##### `ObservabilityConfigurationRevision`<sup>Required</sup> <a name="ObservabilityConfigurationRevision" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision"></a>

```go
func ObservabilityConfigurationRevision() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tags"></a>

```go
func Tags() ApprunnerObservabilityConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList">ApprunnerObservabilityConfigurationTagsList</a>

---

##### `TraceConfiguration`<sup>Required</sup> <a name="TraceConfiguration" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfiguration"></a>

```go
func TraceConfiguration() ApprunnerObservabilityConfigurationTraceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference">ApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a>

---

##### `ObservabilityConfigurationNameInput`<sup>Optional</sup> <a name="ObservabilityConfigurationNameInput" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationNameInput"></a>

```go
func ObservabilityConfigurationNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TraceConfigurationInput`<sup>Optional</sup> <a name="TraceConfigurationInput" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfigurationInput"></a>

```go
func TraceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ObservabilityConfigurationName`<sup>Required</sup> <a name="ObservabilityConfigurationName" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationName"></a>

```go
func ObservabilityConfigurationName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerObservabilityConfigurationConfig <a name="ApprunnerObservabilityConfigurationConfig" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

&apprunnerobservabilityconfiguration.ApprunnerObservabilityConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ObservabilityConfigurationName: *string,
	Tags: interface{},
	TraceConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.observabilityConfigurationName">ObservabilityConfigurationName</a></code> | <code>*string</code> | A name for the observability configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of metadata items that you can associate with your observability configuration resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.traceConfiguration">TraceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | The configuration of the tracing feature within this observability configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ObservabilityConfigurationName`<sup>Optional</sup> <a name="ObservabilityConfigurationName" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.observabilityConfigurationName"></a>

```go
ObservabilityConfigurationName *string
```

- *Type:* *string

A name for the observability configuration.

When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of metadata items that you can associate with your observability configuration resource.

A tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}

---

##### `TraceConfiguration`<sup>Optional</sup> <a name="TraceConfiguration" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.traceConfiguration"></a>

```go
TraceConfiguration ApprunnerObservabilityConfigurationTraceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

The configuration of the tracing feature within this observability configuration.

If you don't specify it, App Runner doesn't enable tracing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration#trace_configuration ApprunnerObservabilityConfiguration#trace_configuration}

---

### ApprunnerObservabilityConfigurationTags <a name="ApprunnerObservabilityConfigurationTags" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

&apprunnerobservabilityconfiguration.ApprunnerObservabilityConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration#key ApprunnerObservabilityConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration#value ApprunnerObservabilityConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration#key ApprunnerObservabilityConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration#value ApprunnerObservabilityConfiguration#value}.

---

### ApprunnerObservabilityConfigurationTraceConfiguration <a name="ApprunnerObservabilityConfigurationTraceConfiguration" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

&apprunnerobservabilityconfiguration.ApprunnerObservabilityConfigurationTraceConfiguration {
	Vendor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.property.vendor">Vendor</a></code> | <code>*string</code> | The implementation provider chosen for tracing App Runner services. |

---

##### `Vendor`<sup>Optional</sup> <a name="Vendor" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.property.vendor"></a>

```go
Vendor *string
```

- *Type:* *string

The implementation provider chosen for tracing App Runner services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerObservabilityConfigurationTagsList <a name="ApprunnerObservabilityConfigurationTagsList" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.NewApprunnerObservabilityConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApprunnerObservabilityConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.get"></a>

```go
func Get(index *f64) ApprunnerObservabilityConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApprunnerObservabilityConfigurationTagsOutputReference <a name="ApprunnerObservabilityConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.NewApprunnerObservabilityConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApprunnerObservabilityConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApprunnerObservabilityConfigurationTraceConfigurationOutputReference <a name="ApprunnerObservabilityConfigurationTraceConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.NewApprunnerObservabilityConfigurationTraceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerObservabilityConfigurationTraceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resetVendor">ResetVendor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVendor` <a name="ResetVendor" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resetVendor"></a>

```go
func ResetVendor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendorInput">VendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VendorInput`<sup>Optional</sup> <a name="VendorInput" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendorInput"></a>

```go
func VendorInput() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



