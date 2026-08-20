# `workspacesWorkspacesPool` Submodule <a name="`workspacesWorkspacesPool` Submodule" id="@cdktn/provider-awscc.workspacesWorkspacesPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspacesPool <a name="WorkspacesWorkspacesPool" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.NewWorkspacesWorkspacesPool(scope Construct, id *string, config WorkspacesWorkspacesPoolConfig) WorkspacesWorkspacesPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig">WorkspacesWorkspacesPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig">WorkspacesWorkspacesPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings">PutApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings">PutTimeoutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings">ResetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode">ResetRunningMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings">ResetTimeoutSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationSettings` <a name="PutApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings"></a>

```go
func PutApplicationSettings(value WorkspacesWorkspacesPoolApplicationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---

##### `PutCapacity` <a name="PutCapacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity"></a>

```go
func PutCapacity(value WorkspacesWorkspacesPoolCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeoutSettings` <a name="PutTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings"></a>

```go
func PutTimeoutSettings(value WorkspacesWorkspacesPoolTimeoutSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---

##### `ResetApplicationSettings` <a name="ResetApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings"></a>

```go
func ResetApplicationSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRunningMode` <a name="ResetRunningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode"></a>

```go
func ResetRunningMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeoutSettings` <a name="ResetTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings"></a>

```go
func ResetTimeoutSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.WorkspacesWorkspacesPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.WorkspacesWorkspacesPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.WorkspacesWorkspacesPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.WorkspacesWorkspacesPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspacesWorkspacesPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspacesWorkspacesPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesWorkspacesPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn">PoolArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings">TimeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput">ApplicationSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput">BundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput">CapacityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput">PoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput">RunningModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput">TimeoutSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName">PoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode">RunningMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationSettings`<sup>Required</sup> <a name="ApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings"></a>

```go
func ApplicationSettings() WorkspacesWorkspacesPoolApplicationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity"></a>

```go
func Capacity() WorkspacesWorkspacesPoolCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PoolArn`<sup>Required</sup> <a name="PoolArn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn"></a>

```go
func PoolArn() *string
```

- *Type:* *string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags"></a>

```go
func Tags() WorkspacesWorkspacesPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a>

---

##### `TimeoutSettings`<sup>Required</sup> <a name="TimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings"></a>

```go
func TimeoutSettings() WorkspacesWorkspacesPoolTimeoutSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a>

---

##### `ApplicationSettingsInput`<sup>Optional</sup> <a name="ApplicationSettingsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput"></a>

```go
func ApplicationSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput"></a>

```go
func BundleIdInput() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput"></a>

```go
func CapacityInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput"></a>

```go
func PoolNameInput() *string
```

- *Type:* *string

---

##### `RunningModeInput`<sup>Optional</sup> <a name="RunningModeInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput"></a>

```go
func RunningModeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutSettingsInput`<sup>Optional</sup> <a name="TimeoutSettingsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput"></a>

```go
func TimeoutSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName"></a>

```go
func PoolName() *string
```

- *Type:* *string

---

##### `RunningMode`<sup>Required</sup> <a name="RunningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode"></a>

```go
func RunningMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspacesPoolApplicationSettings <a name="WorkspacesWorkspacesPoolApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

&workspacesworkspacespool.WorkspacesWorkspacesPoolApplicationSettings {
	SettingsGroup: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup">SettingsGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}. |

---

##### `SettingsGroup`<sup>Optional</sup> <a name="SettingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup"></a>

```go
SettingsGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}.

---

### WorkspacesWorkspacesPoolCapacity <a name="WorkspacesWorkspacesPoolCapacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

&workspacesworkspacespool.WorkspacesWorkspacesPoolCapacity {
	DesiredUserSessions: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions">DesiredUserSessions</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}. |

---

##### `DesiredUserSessions`<sup>Required</sup> <a name="DesiredUserSessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions"></a>

```go
DesiredUserSessions *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}.

---

### WorkspacesWorkspacesPoolConfig <a name="WorkspacesWorkspacesPoolConfig" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

&workspacesworkspacespool.WorkspacesWorkspacesPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BundleId: *string,
	Capacity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity,
	DirectoryId: *string,
	PoolName: *string,
	ApplicationSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings,
	Description: *string,
	RunningMode: *string,
	Tags: interface{},
	TimeoutSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId">BundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName">PoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode">RunningMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings">TimeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId"></a>

```go
BundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}.

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity"></a>

```go
Capacity WorkspacesWorkspacesPoolCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}.

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}.

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName"></a>

```go
PoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}.

---

##### `ApplicationSettings`<sup>Optional</sup> <a name="ApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings"></a>

```go
ApplicationSettings WorkspacesWorkspacesPoolApplicationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}.

---

##### `RunningMode`<sup>Optional</sup> <a name="RunningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode"></a>

```go
RunningMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}.

---

##### `TimeoutSettings`<sup>Optional</sup> <a name="TimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings"></a>

```go
TimeoutSettings WorkspacesWorkspacesPoolTimeoutSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}.

---

### WorkspacesWorkspacesPoolTags <a name="WorkspacesWorkspacesPoolTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

&workspacesworkspacespool.WorkspacesWorkspacesPoolTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}.

---

### WorkspacesWorkspacesPoolTimeoutSettings <a name="WorkspacesWorkspacesPoolTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

&workspacesworkspacespool.WorkspacesWorkspacesPoolTimeoutSettings {
	DisconnectTimeoutInSeconds: *f64,
	IdleDisconnectTimeoutInSeconds: *f64,
	MaxUserDurationInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds">DisconnectTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds">IdleDisconnectTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds">MaxUserDurationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}. |

---

##### `DisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="DisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds"></a>

```go
DisconnectTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}.

---

##### `IdleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds"></a>

```go
IdleDisconnectTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}.

---

##### `MaxUserDurationInSeconds`<sup>Optional</sup> <a name="MaxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds"></a>

```go
MaxUserDurationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspacesPoolApplicationSettingsOutputReference <a name="WorkspacesWorkspacesPoolApplicationSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.NewWorkspacesWorkspacesPoolApplicationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesWorkspacesPoolApplicationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup">ResetSettingsGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSettingsGroup` <a name="ResetSettingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup"></a>

```go
func ResetSettingsGroup()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput">SettingsGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup">SettingsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SettingsGroupInput`<sup>Optional</sup> <a name="SettingsGroupInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```go
func SettingsGroupInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SettingsGroup`<sup>Required</sup> <a name="SettingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup"></a>

```go
func SettingsGroup() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesWorkspacesPoolCapacityOutputReference <a name="WorkspacesWorkspacesPoolCapacityOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.NewWorkspacesWorkspacesPoolCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesWorkspacesPoolCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput">DesiredUserSessionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions">DesiredUserSessions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredUserSessionsInput`<sup>Optional</sup> <a name="DesiredUserSessionsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput"></a>

```go
func DesiredUserSessionsInput() *f64
```

- *Type:* *f64

---

##### `DesiredUserSessions`<sup>Required</sup> <a name="DesiredUserSessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions"></a>

```go
func DesiredUserSessions() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesWorkspacesPoolTagsList <a name="WorkspacesWorkspacesPoolTagsList" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.NewWorkspacesWorkspacesPoolTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesWorkspacesPoolTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get"></a>

```go
func Get(index *f64) WorkspacesWorkspacesPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesWorkspacesPoolTagsOutputReference <a name="WorkspacesWorkspacesPoolTagsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.NewWorkspacesWorkspacesPoolTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesWorkspacesPoolTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesWorkspacesPoolTimeoutSettingsOutputReference <a name="WorkspacesWorkspacesPoolTimeoutSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesworkspacespool"

workspacesworkspacespool.NewWorkspacesWorkspacesPoolTimeoutSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesWorkspacesPoolTimeoutSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds">ResetDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds">ResetIdleDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds">ResetMaxUserDurationInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisconnectTimeoutInSeconds` <a name="ResetDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds"></a>

```go
func ResetDisconnectTimeoutInSeconds()
```

##### `ResetIdleDisconnectTimeoutInSeconds` <a name="ResetIdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds"></a>

```go
func ResetIdleDisconnectTimeoutInSeconds()
```

##### `ResetMaxUserDurationInSeconds` <a name="ResetMaxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds"></a>

```go
func ResetMaxUserDurationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput">DisconnectTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput">IdleDisconnectTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput">MaxUserDurationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds">DisconnectTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds">IdleDisconnectTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds">MaxUserDurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="DisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput"></a>

```go
func DisconnectTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `IdleDisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput"></a>

```go
func IdleDisconnectTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxUserDurationInSecondsInput`<sup>Optional</sup> <a name="MaxUserDurationInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput"></a>

```go
func MaxUserDurationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `DisconnectTimeoutInSeconds`<sup>Required</sup> <a name="DisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds"></a>

```go
func DisconnectTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `IdleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="IdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds"></a>

```go
func IdleDisconnectTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `MaxUserDurationInSeconds`<sup>Required</sup> <a name="MaxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds"></a>

```go
func MaxUserDurationInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



