# `autoscalingLifecycleHook` Submodule <a name="`autoscalingLifecycleHook` Submodule" id="@cdktn/provider-awscc.autoscalingLifecycleHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLifecycleHook <a name="AutoscalingLifecycleHook" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook awscc_autoscaling_lifecycle_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglifecyclehook"

autoscalinglifecyclehook.NewAutoscalingLifecycleHook(scope Construct, id *string, config AutoscalingLifecycleHookConfig) AutoscalingLifecycleHook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig">AutoscalingLifecycleHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig">AutoscalingLifecycleHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult">ResetDefaultResult</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout">ResetHeartbeatTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetLifecycleHookName">ResetLifecycleHookName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata">ResetNotificationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn">ResetNotificationTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultResult` <a name="ResetDefaultResult" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult"></a>

```go
func ResetDefaultResult()
```

##### `ResetHeartbeatTimeout` <a name="ResetHeartbeatTimeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout"></a>

```go
func ResetHeartbeatTimeout()
```

##### `ResetLifecycleHookName` <a name="ResetLifecycleHookName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetLifecycleHookName"></a>

```go
func ResetLifecycleHookName()
```

##### `ResetNotificationMetadata` <a name="ResetNotificationMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata"></a>

```go
func ResetNotificationMetadata()
```

##### `ResetNotificationTargetArn` <a name="ResetNotificationTargetArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn"></a>

```go
func ResetNotificationTargetArn()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn"></a>

```go
func ResetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingLifecycleHook resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglifecyclehook"

autoscalinglifecyclehook.AutoscalingLifecycleHook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglifecyclehook"

autoscalinglifecyclehook.AutoscalingLifecycleHook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglifecyclehook"

autoscalinglifecyclehook.AutoscalingLifecycleHook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglifecyclehook"

autoscalinglifecyclehook.AutoscalingLifecycleHook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AutoscalingLifecycleHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutoscalingLifecycleHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutoscalingLifecycleHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingLifecycleHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupNameInput">AutoScalingGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput">DefaultResultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput">HeartbeatTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookNameInput">LifecycleHookNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput">LifecycleTransitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput">NotificationMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput">NotificationTargetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupName">AutoScalingGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult">DefaultResult</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout">HeartbeatTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookName">LifecycleHookName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition">LifecycleTransition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata">NotificationMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn">NotificationTargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AutoScalingGroupNameInput`<sup>Optional</sup> <a name="AutoScalingGroupNameInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupNameInput"></a>

```go
func AutoScalingGroupNameInput() *string
```

- *Type:* *string

---

##### `DefaultResultInput`<sup>Optional</sup> <a name="DefaultResultInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput"></a>

```go
func DefaultResultInput() *string
```

- *Type:* *string

---

##### `HeartbeatTimeoutInput`<sup>Optional</sup> <a name="HeartbeatTimeoutInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput"></a>

```go
func HeartbeatTimeoutInput() *f64
```

- *Type:* *f64

---

##### `LifecycleHookNameInput`<sup>Optional</sup> <a name="LifecycleHookNameInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookNameInput"></a>

```go
func LifecycleHookNameInput() *string
```

- *Type:* *string

---

##### `LifecycleTransitionInput`<sup>Optional</sup> <a name="LifecycleTransitionInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput"></a>

```go
func LifecycleTransitionInput() *string
```

- *Type:* *string

---

##### `NotificationMetadataInput`<sup>Optional</sup> <a name="NotificationMetadataInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput"></a>

```go
func NotificationMetadataInput() *string
```

- *Type:* *string

---

##### `NotificationTargetArnInput`<sup>Optional</sup> <a name="NotificationTargetArnInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput"></a>

```go
func NotificationTargetArnInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `AutoScalingGroupName`<sup>Required</sup> <a name="AutoScalingGroupName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupName"></a>

```go
func AutoScalingGroupName() *string
```

- *Type:* *string

---

##### `DefaultResult`<sup>Required</sup> <a name="DefaultResult" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult"></a>

```go
func DefaultResult() *string
```

- *Type:* *string

---

##### `HeartbeatTimeout`<sup>Required</sup> <a name="HeartbeatTimeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout"></a>

```go
func HeartbeatTimeout() *f64
```

- *Type:* *f64

---

##### `LifecycleHookName`<sup>Required</sup> <a name="LifecycleHookName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookName"></a>

```go
func LifecycleHookName() *string
```

- *Type:* *string

---

##### `LifecycleTransition`<sup>Required</sup> <a name="LifecycleTransition" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition"></a>

```go
func LifecycleTransition() *string
```

- *Type:* *string

---

##### `NotificationMetadata`<sup>Required</sup> <a name="NotificationMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata"></a>

```go
func NotificationMetadata() *string
```

- *Type:* *string

---

##### `NotificationTargetArn`<sup>Required</sup> <a name="NotificationTargetArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn"></a>

```go
func NotificationTargetArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLifecycleHookConfig <a name="AutoscalingLifecycleHookConfig" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglifecyclehook"

&autoscalinglifecyclehook.AutoscalingLifecycleHookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutoScalingGroupName: *string,
	LifecycleTransition: *string,
	DefaultResult: *string,
	HeartbeatTimeout: *f64,
	LifecycleHookName: *string,
	NotificationMetadata: *string,
	NotificationTargetArn: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoScalingGroupName">AutoScalingGroupName</a></code> | <code>*string</code> | The name of the Auto Scaling group for the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition">LifecycleTransition</a></code> | <code>*string</code> | The instance state to which you want to attach the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult">DefaultResult</a></code> | <code>*string</code> | The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout">HeartbeatTimeout</a></code> | <code>*f64</code> | The maximum time, in seconds, that can elapse before the lifecycle hook times out. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleHookName">LifecycleHookName</a></code> | <code>*string</code> | The name of the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata">NotificationMetadata</a></code> | <code>*string</code> | Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn">NotificationTargetArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoScalingGroupName`<sup>Required</sup> <a name="AutoScalingGroupName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoScalingGroupName"></a>

```go
AutoScalingGroupName *string
```

- *Type:* *string

The name of the Auto Scaling group for the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook#auto_scaling_group_name AutoscalingLifecycleHook#auto_scaling_group_name}

---

##### `LifecycleTransition`<sup>Required</sup> <a name="LifecycleTransition" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition"></a>

```go
LifecycleTransition *string
```

- *Type:* *string

The instance state to which you want to attach the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}

---

##### `DefaultResult`<sup>Optional</sup> <a name="DefaultResult" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult"></a>

```go
DefaultResult *string
```

- *Type:* *string

The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs.

The valid values are CONTINUE and ABANDON (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}

---

##### `HeartbeatTimeout`<sup>Optional</sup> <a name="HeartbeatTimeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout"></a>

```go
HeartbeatTimeout *f64
```

- *Type:* *f64

The maximum time, in seconds, that can elapse before the lifecycle hook times out.

The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}

---

##### `LifecycleHookName`<sup>Optional</sup> <a name="LifecycleHookName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleHookName"></a>

```go
LifecycleHookName *string
```

- *Type:* *string

The name of the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_hook_name AutoscalingLifecycleHook#lifecycle_hook_name}

---

##### `NotificationMetadata`<sup>Optional</sup> <a name="NotificationMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata"></a>

```go
NotificationMetadata *string
```

- *Type:* *string

Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}

---

##### `NotificationTargetArn`<sup>Optional</sup> <a name="NotificationTargetArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn"></a>

```go
NotificationTargetArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook.

You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}

---



