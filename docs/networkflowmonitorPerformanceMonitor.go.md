# `networkflowmonitorPerformanceMonitor` Submodule <a name="`networkflowmonitorPerformanceMonitor` Submodule" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorPerformanceMonitor <a name="NetworkflowmonitorPerformanceMonitor" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor awscc_networkflowmonitor_performance_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

networkflowmonitorperformancemonitor.NewNetworkflowmonitorPerformanceMonitor(scope Construct, id *string, config NetworkflowmonitorPerformanceMonitorConfig) NetworkflowmonitorPerformanceMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig">NetworkflowmonitorPerformanceMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig">NetworkflowmonitorPerformanceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetScopeArn">ResetScopeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetScopeArn` <a name="ResetScopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetScopeArn"></a>

```go
func ResetScopeArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

networkflowmonitorperformancemonitor.NetworkflowmonitorPerformanceMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

networkflowmonitorperformancemonitor.NetworkflowmonitorPerformanceMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

networkflowmonitorperformancemonitor.NetworkflowmonitorPerformanceMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

networkflowmonitorperformancemonitor.NetworkflowmonitorPerformanceMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkflowmonitorPerformanceMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkflowmonitorPerformanceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorPerformanceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorStatus">MonitorStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorType">MonitorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList">NetworkflowmonitorPerformanceMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList">NetworkflowmonitorPerformanceMonitorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorNameInput">MonitorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArnInput">ScopeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorName">MonitorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `MonitorStatus`<sup>Required</sup> <a name="MonitorStatus" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorStatus"></a>

```go
func MonitorStatus() *string
```

- *Type:* *string

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorType"></a>

```go
func MonitorType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tags"></a>

```go
func Tags() NetworkflowmonitorPerformanceMonitorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList">NetworkflowmonitorPerformanceMonitorTagsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targets"></a>

```go
func Targets() NetworkflowmonitorPerformanceMonitorTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList">NetworkflowmonitorPerformanceMonitorTargetsList</a>

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorNameInput"></a>

```go
func MonitorNameInput() *string
```

- *Type:* *string

---

##### `ScopeArnInput`<sup>Optional</sup> <a name="ScopeArnInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArnInput"></a>

```go
func ScopeArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorName"></a>

```go
func MonitorName() *string
```

- *Type:* *string

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArn"></a>

```go
func ScopeArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorPerformanceMonitorConfig <a name="NetworkflowmonitorPerformanceMonitorConfig" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

&networkflowmonitorperformancemonitor.NetworkflowmonitorPerformanceMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MonitorName: *string,
	Targets: interface{},
	ScopeArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.monitorName">MonitorName</a></code> | <code>*string</code> | The name of the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.targets">Targets</a></code> | <code>interface{}</code> | The targets that are monitored by the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the scope for the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the performance monitor. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.monitorName"></a>

```go
MonitorName *string
```

- *Type:* *string

The name of the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#monitor_name NetworkflowmonitorPerformanceMonitor#monitor_name}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

The targets that are monitored by the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#targets NetworkflowmonitorPerformanceMonitor#targets}

---

##### `ScopeArn`<sup>Optional</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.scopeArn"></a>

```go
ScopeArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the scope for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#scope_arn NetworkflowmonitorPerformanceMonitor#scope_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#tags NetworkflowmonitorPerformanceMonitor#tags}

---

### NetworkflowmonitorPerformanceMonitorTags <a name="NetworkflowmonitorPerformanceMonitorTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

&networkflowmonitorperformancemonitor.NetworkflowmonitorPerformanceMonitorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#key NetworkflowmonitorPerformanceMonitor#key}. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#value NetworkflowmonitorPerformanceMonitor#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#key NetworkflowmonitorPerformanceMonitor#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#value NetworkflowmonitorPerformanceMonitor#value}.

---

### NetworkflowmonitorPerformanceMonitorTargets <a name="NetworkflowmonitorPerformanceMonitorTargets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

&networkflowmonitorperformancemonitor.NetworkflowmonitorPerformanceMonitorTargets {
	Identifier: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.identifier">Identifier</a></code> | <code>*string</code> | The identifier of the target. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.type">Type</a></code> | <code>*string</code> | The type of the target. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

The identifier of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#identifier NetworkflowmonitorPerformanceMonitor#identifier}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#type NetworkflowmonitorPerformanceMonitor#type}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorPerformanceMonitorTagsList <a name="NetworkflowmonitorPerformanceMonitorTagsList" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

networkflowmonitorperformancemonitor.NewNetworkflowmonitorPerformanceMonitorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorPerformanceMonitorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorPerformanceMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorPerformanceMonitorTagsOutputReference <a name="NetworkflowmonitorPerformanceMonitorTagsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

networkflowmonitorperformancemonitor.NewNetworkflowmonitorPerformanceMonitorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorPerformanceMonitorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorPerformanceMonitorTargetsList <a name="NetworkflowmonitorPerformanceMonitorTargetsList" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

networkflowmonitorperformancemonitor.NewNetworkflowmonitorPerformanceMonitorTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkflowmonitorPerformanceMonitorTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get"></a>

```go
func Get(index *f64) NetworkflowmonitorPerformanceMonitorTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkflowmonitorPerformanceMonitorTargetsOutputReference <a name="NetworkflowmonitorPerformanceMonitorTargetsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/networkflowmonitorperformancemonitor"

networkflowmonitorperformancemonitor.NewNetworkflowmonitorPerformanceMonitorTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkflowmonitorPerformanceMonitorTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



