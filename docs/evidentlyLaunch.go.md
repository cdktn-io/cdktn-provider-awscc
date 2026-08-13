# `evidentlyLaunch` Submodule <a name="`evidentlyLaunch` Submodule" id="@cdktn/provider-awscc.evidentlyLaunch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyLaunch <a name="EvidentlyLaunch" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch awscc_evidently_launch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunch(scope Construct, id *string, config EvidentlyLaunchConfig) EvidentlyLaunch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig">EvidentlyLaunchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig">EvidentlyLaunchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus">PutExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putGroups">PutGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors">PutMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig">PutScheduledSplitsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetExecutionStatus">ResetExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors">ResetMetricMonitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt">ResetRandomizationSalt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExecutionStatus` <a name="PutExecutionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus"></a>

```go
func PutExecutionStatus(value EvidentlyLaunchExecutionStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putExecutionStatus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

---

##### `PutGroups` <a name="PutGroups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putGroups"></a>

```go
func PutGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetricMonitors` <a name="PutMetricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors"></a>

```go
func PutMetricMonitors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putMetricMonitors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScheduledSplitsConfig` <a name="PutScheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig"></a>

```go
func PutScheduledSplitsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putScheduledSplitsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExecutionStatus` <a name="ResetExecutionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetExecutionStatus"></a>

```go
func ResetExecutionStatus()
```

##### `ResetMetricMonitors` <a name="ResetMetricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetMetricMonitors"></a>

```go
func ResetMetricMonitors()
```

##### `ResetRandomizationSalt` <a name="ResetRandomizationSalt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetRandomizationSalt"></a>

```go
func ResetRandomizationSalt()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EvidentlyLaunch resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.EvidentlyLaunch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.EvidentlyLaunch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.EvidentlyLaunch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.EvidentlyLaunch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EvidentlyLaunch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EvidentlyLaunch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EvidentlyLaunch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyLaunch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatus">ExecutionStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference">EvidentlyLaunchExecutionStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groups">Groups</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors">MetricMonitors</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig">ScheduledSplitsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList">EvidentlyLaunchScheduledSplitsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList">EvidentlyLaunchTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatusInput">ExecutionStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groupsInput">GroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput">MetricMonitorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput">RandomizationSaltInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput">ScheduledSplitsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt">RandomizationSalt</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ExecutionStatus`<sup>Required</sup> <a name="ExecutionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatus"></a>

```go
func ExecutionStatus() EvidentlyLaunchExecutionStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference">EvidentlyLaunchExecutionStatusOutputReference</a>

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groups"></a>

```go
func Groups() EvidentlyLaunchGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList">EvidentlyLaunchGroupsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricMonitors`<sup>Required</sup> <a name="MetricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitors"></a>

```go
func MetricMonitors() EvidentlyLaunchMetricMonitorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList">EvidentlyLaunchMetricMonitorsList</a>

---

##### `ScheduledSplitsConfig`<sup>Required</sup> <a name="ScheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfig"></a>

```go
func ScheduledSplitsConfig() EvidentlyLaunchScheduledSplitsConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList">EvidentlyLaunchScheduledSplitsConfigList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tags"></a>

```go
func Tags() EvidentlyLaunchTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList">EvidentlyLaunchTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExecutionStatusInput`<sup>Optional</sup> <a name="ExecutionStatusInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.executionStatusInput"></a>

```go
func ExecutionStatusInput() interface{}
```

- *Type:* interface{}

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.groupsInput"></a>

```go
func GroupsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricMonitorsInput`<sup>Optional</sup> <a name="MetricMonitorsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.metricMonitorsInput"></a>

```go
func MetricMonitorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RandomizationSaltInput`<sup>Optional</sup> <a name="RandomizationSaltInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSaltInput"></a>

```go
func RandomizationSaltInput() *string
```

- *Type:* *string

---

##### `ScheduledSplitsConfigInput`<sup>Optional</sup> <a name="ScheduledSplitsConfigInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.scheduledSplitsConfigInput"></a>

```go
func ScheduledSplitsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RandomizationSalt`<sup>Required</sup> <a name="RandomizationSalt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.randomizationSalt"></a>

```go
func RandomizationSalt() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyLaunchConfig <a name="EvidentlyLaunchConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Groups: interface{},
	Name: *string,
	Project: *string,
	ScheduledSplitsConfig: interface{},
	Description: *string,
	ExecutionStatus: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus,
	MetricMonitors: interface{},
	RandomizationSalt: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.groups">Groups</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig">ScheduledSplitsConfig</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.executionStatus">ExecutionStatus</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a></code> | Start or Stop Launch Launch. Default is not started. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors">MetricMonitors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt">RandomizationSalt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.groups"></a>

```go
Groups interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}.

---

##### `ScheduledSplitsConfig`<sup>Required</sup> <a name="ScheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.scheduledSplitsConfig"></a>

```go
ScheduledSplitsConfig interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}.

---

##### `ExecutionStatus`<sup>Optional</sup> <a name="ExecutionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.executionStatus"></a>

```go
ExecutionStatus EvidentlyLaunchExecutionStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus">EvidentlyLaunchExecutionStatus</a>

Start or Stop Launch Launch. Default is not started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#execution_status EvidentlyLaunch#execution_status}

---

##### `MetricMonitors`<sup>Optional</sup> <a name="MetricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.metricMonitors"></a>

```go
MetricMonitors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}.

---

##### `RandomizationSalt`<sup>Optional</sup> <a name="RandomizationSalt" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.randomizationSalt"></a>

```go
RandomizationSalt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#tags EvidentlyLaunch#tags}

---

### EvidentlyLaunchExecutionStatus <a name="EvidentlyLaunchExecutionStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchExecutionStatus {
	DesiredState: *string,
	Reason: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.desiredState">DesiredState</a></code> | <code>*string</code> | Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.reason">Reason</a></code> | <code>*string</code> | Provide a reason for stopping the launch. Defaults to empty if not provided. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.status">Status</a></code> | <code>*string</code> | Provide START or STOP action to apply on a launch. |

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#desired_state EvidentlyLaunch#desired_state}

---

##### `Reason`<sup>Optional</sup> <a name="Reason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.reason"></a>

```go
Reason *string
```

- *Type:* *string

Provide a reason for stopping the launch. Defaults to empty if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#reason EvidentlyLaunch#reason}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatus.property.status"></a>

```go
Status *string
```

- *Type:* *string

Provide START or STOP action to apply on a launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#status EvidentlyLaunch#status}

---

### EvidentlyLaunchGroups <a name="EvidentlyLaunchGroups" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchGroups {
	Feature: *string,
	GroupName: *string,
	Variation: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.feature">Feature</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#feature EvidentlyLaunch#feature}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.variation">Variation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#variation EvidentlyLaunch#variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}. |

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.feature"></a>

```go
Feature *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#feature EvidentlyLaunch#feature}.

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}.

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.variation"></a>

```go
Variation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#variation EvidentlyLaunch#variation}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroups.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}.

---

### EvidentlyLaunchMetricMonitors <a name="EvidentlyLaunchMetricMonitors" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchMetricMonitors {
	EntityIdKey: *string,
	EventPattern: *string,
	MetricName: *string,
	UnitLabel: *string,
	ValueKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.entityIdKey">EntityIdKey</a></code> | <code>*string</code> | The JSON path to reference the entity id in the event. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.eventPattern">EventPattern</a></code> | <code>*string</code> | Event patterns have the same structure as the events they match. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_name EvidentlyLaunch#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#unit_label EvidentlyLaunch#unit_label}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.valueKey">ValueKey</a></code> | <code>*string</code> | The JSON path to reference the numerical metric value in the event. |

---

##### `EntityIdKey`<sup>Optional</sup> <a name="EntityIdKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.entityIdKey"></a>

```go
EntityIdKey *string
```

- *Type:* *string

The JSON path to reference the entity id in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}

---

##### `EventPattern`<sup>Optional</sup> <a name="EventPattern" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.eventPattern"></a>

```go
EventPattern *string
```

- *Type:* *string

Event patterns have the same structure as the events they match.

Rules use event patterns to select events. An event pattern either matches an event or it doesn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#metric_name EvidentlyLaunch#metric_name}.

---

##### `UnitLabel`<sup>Optional</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.unitLabel"></a>

```go
UnitLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#unit_label EvidentlyLaunch#unit_label}.

---

##### `ValueKey`<sup>Optional</sup> <a name="ValueKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitors.property.valueKey"></a>

```go
ValueKey *string
```

- *Type:* *string

The JSON path to reference the numerical metric value in the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#value_key EvidentlyLaunch#value_key}

---

### EvidentlyLaunchScheduledSplitsConfig <a name="EvidentlyLaunchScheduledSplitsConfig" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchScheduledSplitsConfig {
	GroupWeights: interface{},
	StartTime: *string,
	SegmentOverrides: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.groupWeights">GroupWeights</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_weights EvidentlyLaunch#group_weights}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#start_time EvidentlyLaunch#start_time}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.segmentOverrides">SegmentOverrides</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}. |

---

##### `GroupWeights`<sup>Required</sup> <a name="GroupWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.groupWeights"></a>

```go
GroupWeights interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_weights EvidentlyLaunch#group_weights}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#start_time EvidentlyLaunch#start_time}.

---

##### `SegmentOverrides`<sup>Optional</sup> <a name="SegmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfig.property.segmentOverrides"></a>

```go
SegmentOverrides interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}.

---

### EvidentlyLaunchScheduledSplitsConfigGroupWeights <a name="EvidentlyLaunchScheduledSplitsConfigGroupWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights {
	GroupName: *string,
	SplitWeight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.splitWeight">SplitWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}. |

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}.

---

##### `SplitWeight`<sup>Required</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeights.property.splitWeight"></a>

```go
SplitWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}.

---

### EvidentlyLaunchScheduledSplitsConfigSegmentOverrides <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides {
	EvaluationOrder: *f64,
	Segment: *string,
	Weights: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.evaluationOrder">EvaluationOrder</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.segment">Segment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#segment EvidentlyLaunch#segment}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.weights">Weights</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#weights EvidentlyLaunch#weights}. |

---

##### `EvaluationOrder`<sup>Optional</sup> <a name="EvaluationOrder" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.evaluationOrder"></a>

```go
EvaluationOrder *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}.

---

##### `Segment`<sup>Optional</sup> <a name="Segment" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.segment"></a>

```go
Segment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#segment EvidentlyLaunch#segment}.

---

##### `Weights`<sup>Optional</sup> <a name="Weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverrides.property.weights"></a>

```go
Weights interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#weights EvidentlyLaunch#weights}.

---

### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights {
	GroupName: *string,
	SplitWeight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.splitWeight">SplitWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}. |

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}.

---

##### `SplitWeight`<sup>Optional</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights.property.splitWeight"></a>

```go
SplitWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}.

---

### EvidentlyLaunchTags <a name="EvidentlyLaunchTags" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

&evidentlylaunch.EvidentlyLaunchTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#key EvidentlyLaunch#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evidently_launch#value EvidentlyLaunch#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyLaunchExecutionStatusOutputReference <a name="EvidentlyLaunchExecutionStatusOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchExecutionStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EvidentlyLaunchExecutionStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetReason">ResetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetReason` <a name="ResetReason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetReason"></a>

```go
func ResetReason()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reasonInput">ReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reasonInput"></a>

```go
func ReasonInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchExecutionStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchGroupsList <a name="EvidentlyLaunchGroupsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchGroupsOutputReference <a name="EvidentlyLaunchGroupsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput">FeatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput">VariationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature">Feature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation">Variation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.featureInput"></a>

```go
func FeatureInput() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variationInput"></a>

```go
func VariationInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.feature"></a>

```go
func Feature() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.variation"></a>

```go
func Variation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchMetricMonitorsList <a name="EvidentlyLaunchMetricMonitorsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchMetricMonitorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchMetricMonitorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchMetricMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchMetricMonitorsOutputReference <a name="EvidentlyLaunchMetricMonitorsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchMetricMonitorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchMetricMonitorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEntityIdKey">ResetEntityIdKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEventPattern">ResetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetUnitLabel">ResetUnitLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetValueKey">ResetValueKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityIdKey` <a name="ResetEntityIdKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEntityIdKey"></a>

```go
func ResetEntityIdKey()
```

##### `ResetEventPattern` <a name="ResetEventPattern" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetEventPattern"></a>

```go
func ResetEventPattern()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetMetricName"></a>

```go
func ResetMetricName()
```

##### `ResetUnitLabel` <a name="ResetUnitLabel" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetUnitLabel"></a>

```go
func ResetUnitLabel()
```

##### `ResetValueKey` <a name="ResetValueKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.resetValueKey"></a>

```go
func ResetValueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKeyInput">EntityIdKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPatternInput">EventPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabelInput">UnitLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKeyInput">ValueKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey">EntityIdKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern">EventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKey">ValueKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdKeyInput`<sup>Optional</sup> <a name="EntityIdKeyInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKeyInput"></a>

```go
func EntityIdKeyInput() *string
```

- *Type:* *string

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPatternInput"></a>

```go
func EventPatternInput() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `UnitLabelInput`<sup>Optional</sup> <a name="UnitLabelInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabelInput"></a>

```go
func UnitLabelInput() *string
```

- *Type:* *string

---

##### `ValueKeyInput`<sup>Optional</sup> <a name="ValueKeyInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKeyInput"></a>

```go
func ValueKeyInput() *string
```

- *Type:* *string

---

##### `EntityIdKey`<sup>Required</sup> <a name="EntityIdKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.entityIdKey"></a>

```go
func EntityIdKey() *string
```

- *Type:* *string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.eventPattern"></a>

```go
func EventPattern() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `UnitLabel`<sup>Required</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.unitLabel"></a>

```go
func UnitLabel() *string
```

- *Type:* *string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.valueKey"></a>

```go
func ValueKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchMetricMonitorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigGroupWeightsList <a name="EvidentlyLaunchScheduledSplitsConfigGroupWeightsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigGroupWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchScheduledSplitsConfigGroupWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeightInput">SplitWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight">SplitWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `SplitWeightInput`<sup>Optional</sup> <a name="SplitWeightInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeightInput"></a>

```go
func SplitWeightInput() *f64
```

- *Type:* *f64

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `SplitWeight`<sup>Required</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.splitWeight"></a>

```go
func SplitWeight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigList <a name="EvidentlyLaunchScheduledSplitsConfigList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchScheduledSplitsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchScheduledSplitsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchScheduledSplitsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putGroupWeights">PutGroupWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSegmentOverrides">PutSegmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resetSegmentOverrides">ResetSegmentOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupWeights` <a name="PutGroupWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putGroupWeights"></a>

```go
func PutGroupWeights(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putGroupWeights.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSegmentOverrides` <a name="PutSegmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSegmentOverrides"></a>

```go
func PutSegmentOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.putSegmentOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSegmentOverrides` <a name="ResetSegmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.resetSegmentOverrides"></a>

```go
func ResetSegmentOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights">GroupWeights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList">EvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides">SegmentOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeightsInput">GroupWeightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverridesInput">SegmentOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupWeights`<sup>Required</sup> <a name="GroupWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeights"></a>

```go
func GroupWeights() EvidentlyLaunchScheduledSplitsConfigGroupWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigGroupWeightsList">EvidentlyLaunchScheduledSplitsConfigGroupWeightsList</a>

---

##### `SegmentOverrides`<sup>Required</sup> <a name="SegmentOverrides" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverrides"></a>

```go
func SegmentOverrides() EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList</a>

---

##### `GroupWeightsInput`<sup>Optional</sup> <a name="GroupWeightsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.groupWeightsInput"></a>

```go
func GroupWeightsInput() interface{}
```

- *Type:* interface{}

---

##### `SegmentOverridesInput`<sup>Optional</sup> <a name="SegmentOverridesInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.segmentOverridesInput"></a>

```go
func SegmentOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigSegmentOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.putWeights">PutWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetEvaluationOrder">ResetEvaluationOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetSegment">ResetSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetWeights">ResetWeights</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeights` <a name="PutWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.putWeights"></a>

```go
func PutWeights(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.putWeights.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEvaluationOrder` <a name="ResetEvaluationOrder" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetEvaluationOrder"></a>

```go
func ResetEvaluationOrder()
```

##### `ResetSegment` <a name="ResetSegment" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetSegment"></a>

```go
func ResetSegment()
```

##### `ResetWeights` <a name="ResetWeights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.resetWeights"></a>

```go
func ResetWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights">Weights</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrderInput">EvaluationOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segmentInput">SegmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weightsInput">WeightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder">EvaluationOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment">Segment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Weights`<sup>Required</sup> <a name="Weights" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weights"></a>

```go
func Weights() EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList">EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList</a>

---

##### `EvaluationOrderInput`<sup>Optional</sup> <a name="EvaluationOrderInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrderInput"></a>

```go
func EvaluationOrderInput() *f64
```

- *Type:* *f64

---

##### `SegmentInput`<sup>Optional</sup> <a name="SegmentInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segmentInput"></a>

```go
func SegmentInput() *string
```

- *Type:* *string

---

##### `WeightsInput`<sup>Optional</sup> <a name="WeightsInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.weightsInput"></a>

```go
func WeightsInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationOrder`<sup>Required</sup> <a name="EvaluationOrder" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.evaluationOrder"></a>

```go
func EvaluationOrder() *f64
```

- *Type:* *f64

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.segment"></a>

```go
func Segment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference <a name="EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetSplitWeight">ResetSplitWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetGroupName"></a>

```go
func ResetGroupName()
```

##### `ResetSplitWeight` <a name="ResetSplitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.resetSplitWeight"></a>

```go
func ResetSplitWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeightInput">SplitWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight">SplitWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `SplitWeightInput`<sup>Optional</sup> <a name="SplitWeightInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeightInput"></a>

```go
func SplitWeightInput() *f64
```

- *Type:* *f64

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `SplitWeight`<sup>Required</sup> <a name="SplitWeight" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.splitWeight"></a>

```go
func SplitWeight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchTagsList <a name="EvidentlyLaunchTagsList" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyLaunchTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.get"></a>

```go
func Get(index *f64) EvidentlyLaunchTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyLaunchTagsOutputReference <a name="EvidentlyLaunchTagsOutputReference" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlylaunch"

evidentlylaunch.NewEvidentlyLaunchTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyLaunchTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyLaunch.EvidentlyLaunchTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



