# `workspacesinstancesWorkspaceInstance` Submodule <a name="`workspacesinstancesWorkspaceInstance` Submodule" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesinstancesWorkspaceInstance <a name="WorkspacesinstancesWorkspaceInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance awscc_workspacesinstances_workspace_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstance(scope Construct, id *string, config WorkspacesinstancesWorkspaceInstanceConfig) WorkspacesinstancesWorkspaceInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig">WorkspacesinstancesWorkspaceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig">WorkspacesinstancesWorkspaceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance">PutManagedInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetManagedInstance">ResetManagedInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManagedInstance` <a name="PutManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance"></a>

```go
func PutManagedInstance(value WorkspacesinstancesWorkspaceInstanceManagedInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetManagedInstance` <a name="ResetManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetManagedInstance"></a>

```go
func ResetManagedInstance()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspacesinstancesWorkspaceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspacesinstancesWorkspaceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesinstancesWorkspaceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance">Ec2ManagedInstance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstance">ManagedInstance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisionState">ProvisionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList">WorkspacesinstancesWorkspaceInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId">WorkspaceInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstanceInput">ManagedInstanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ec2ManagedInstance`<sup>Required</sup> <a name="Ec2ManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance"></a>

```go
func Ec2ManagedInstance() WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstance`<sup>Required</sup> <a name="ManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstance"></a>

```go
func ManagedInstance() WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a>

---

##### `ProvisionState`<sup>Required</sup> <a name="ProvisionState" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisionState"></a>

```go
func ProvisionState() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tags"></a>

```go
func Tags() WorkspacesinstancesWorkspaceInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList">WorkspacesinstancesWorkspaceInstanceTagsList</a>

---

##### `WorkspaceInstanceId`<sup>Required</sup> <a name="WorkspaceInstanceId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId"></a>

```go
func WorkspaceInstanceId() *string
```

- *Type:* *string

---

##### `ManagedInstanceInput`<sup>Optional</sup> <a name="ManagedInstanceInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstanceInput"></a>

```go
func ManagedInstanceInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesinstancesWorkspaceInstanceConfig <a name="WorkspacesinstancesWorkspaceInstanceConfig" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstance: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.managedInstance">ManagedInstance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#managed_instance WorkspacesinstancesWorkspaceInstance#managed_instance}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstance`<sup>Optional</sup> <a name="ManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.managedInstance"></a>

```go
ManagedInstance WorkspacesinstancesWorkspaceInstanceManagedInstance
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#managed_instance WorkspacesinstancesWorkspaceInstance#managed_instance}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}.

---

### WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance <a name="WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance {

}
```


### WorkspacesinstancesWorkspaceInstanceManagedInstance <a name="WorkspacesinstancesWorkspaceInstanceManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstance {
	BlockDeviceMappings: interface{},
	CapacityReservationSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification,
	CpuOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions,
	CreditSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification,
	DisableApiStop: interface{},
	EbsOptimized: interface{},
	EnablePrimaryIpv6: interface{},
	EnclaveOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions,
	HibernationOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions,
	IamInstanceProfile: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile,
	ImageId: *string,
	InstanceType: *string,
	Ipv6AddressCount: *f64,
	KeyName: *string,
	LicenseSpecifications: interface{},
	MaintenanceOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions,
	MetadataOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions,
	Monitoring: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring,
	NetworkInterfaces: interface{},
	NetworkPerformanceOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions,
	Placement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement,
	PrivateDnsNameOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions,
	SubnetId: *string,
	TagSpecifications: interface{},
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#block_device_mappings WorkspacesinstancesWorkspaceInstance#block_device_mappings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_specification WorkspacesinstancesWorkspaceInstance#capacity_reservation_specification}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#cpu_options WorkspacesinstancesWorkspaceInstance#cpu_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#credit_specification WorkspacesinstancesWorkspaceInstance#credit_specification}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.disableApiStop">DisableApiStop</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#disable_api_stop WorkspacesinstancesWorkspaceInstance#disable_api_stop}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#ebs_optimized WorkspacesinstancesWorkspaceInstance#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enablePrimaryIpv6">EnablePrimaryIpv6</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enable_primary_ipv_6 WorkspacesinstancesWorkspaceInstance#enable_primary_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enclave_options WorkspacesinstancesWorkspaceInstance#enclave_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#hibernation_options WorkspacesinstancesWorkspaceInstance#hibernation_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#iam_instance_profile WorkspacesinstancesWorkspaceInstance#iam_instance_profile}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#image_id WorkspacesinstancesWorkspaceInstance#image_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#instance_type WorkspacesinstancesWorkspaceInstance#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#ipv_6_address_count WorkspacesinstancesWorkspaceInstance#ipv_6_address_count}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.keyName">KeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#key_name WorkspacesinstancesWorkspaceInstance#key_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.licenseSpecifications">LicenseSpecifications</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#license_specifications WorkspacesinstancesWorkspaceInstance#license_specifications}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#maintenance_options WorkspacesinstancesWorkspaceInstance#maintenance_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#metadata_options WorkspacesinstancesWorkspaceInstance#metadata_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#monitoring WorkspacesinstancesWorkspaceInstance#monitoring}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkInterfaces">NetworkInterfaces</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#network_interfaces WorkspacesinstancesWorkspaceInstance#network_interfaces}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkPerformanceOptions">NetworkPerformanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#network_performance_options WorkspacesinstancesWorkspaceInstance#network_performance_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#placement WorkspacesinstancesWorkspaceInstance#placement}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#private_dns_name_options WorkspacesinstancesWorkspaceInstance#private_dns_name_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.tagSpecifications">TagSpecifications</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#tag_specifications WorkspacesinstancesWorkspaceInstance#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#user_data WorkspacesinstancesWorkspaceInstance#user_data}. |

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.blockDeviceMappings"></a>

```go
BlockDeviceMappings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#block_device_mappings WorkspacesinstancesWorkspaceInstance#block_device_mappings}.

---

##### `CapacityReservationSpecification`<sup>Optional</sup> <a name="CapacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.capacityReservationSpecification"></a>

```go
CapacityReservationSpecification WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_specification WorkspacesinstancesWorkspaceInstance#capacity_reservation_specification}.

---

##### `CpuOptions`<sup>Optional</sup> <a name="CpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.cpuOptions"></a>

```go
CpuOptions WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#cpu_options WorkspacesinstancesWorkspaceInstance#cpu_options}.

---

##### `CreditSpecification`<sup>Optional</sup> <a name="CreditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.creditSpecification"></a>

```go
CreditSpecification WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#credit_specification WorkspacesinstancesWorkspaceInstance#credit_specification}.

---

##### `DisableApiStop`<sup>Optional</sup> <a name="DisableApiStop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.disableApiStop"></a>

```go
DisableApiStop interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#disable_api_stop WorkspacesinstancesWorkspaceInstance#disable_api_stop}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ebsOptimized"></a>

```go
EbsOptimized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#ebs_optimized WorkspacesinstancesWorkspaceInstance#ebs_optimized}.

---

##### `EnablePrimaryIpv6`<sup>Optional</sup> <a name="EnablePrimaryIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enablePrimaryIpv6"></a>

```go
EnablePrimaryIpv6 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enable_primary_ipv_6 WorkspacesinstancesWorkspaceInstance#enable_primary_ipv_6}.

---

##### `EnclaveOptions`<sup>Optional</sup> <a name="EnclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enclaveOptions"></a>

```go
EnclaveOptions WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enclave_options WorkspacesinstancesWorkspaceInstance#enclave_options}.

---

##### `HibernationOptions`<sup>Optional</sup> <a name="HibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.hibernationOptions"></a>

```go
HibernationOptions WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#hibernation_options WorkspacesinstancesWorkspaceInstance#hibernation_options}.

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.iamInstanceProfile"></a>

```go
IamInstanceProfile WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#iam_instance_profile WorkspacesinstancesWorkspaceInstance#iam_instance_profile}.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#image_id WorkspacesinstancesWorkspaceInstance#image_id}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#instance_type WorkspacesinstancesWorkspaceInstance#instance_type}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ipv6AddressCount"></a>

```go
Ipv6AddressCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#ipv_6_address_count WorkspacesinstancesWorkspaceInstance#ipv_6_address_count}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#key_name WorkspacesinstancesWorkspaceInstance#key_name}.

---

##### `LicenseSpecifications`<sup>Optional</sup> <a name="LicenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.licenseSpecifications"></a>

```go
LicenseSpecifications interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#license_specifications WorkspacesinstancesWorkspaceInstance#license_specifications}.

---

##### `MaintenanceOptions`<sup>Optional</sup> <a name="MaintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.maintenanceOptions"></a>

```go
MaintenanceOptions WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#maintenance_options WorkspacesinstancesWorkspaceInstance#maintenance_options}.

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.metadataOptions"></a>

```go
MetadataOptions WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#metadata_options WorkspacesinstancesWorkspaceInstance#metadata_options}.

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.monitoring"></a>

```go
Monitoring WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#monitoring WorkspacesinstancesWorkspaceInstance#monitoring}.

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkInterfaces"></a>

```go
NetworkInterfaces interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#network_interfaces WorkspacesinstancesWorkspaceInstance#network_interfaces}.

---

##### `NetworkPerformanceOptions`<sup>Optional</sup> <a name="NetworkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkPerformanceOptions"></a>

```go
NetworkPerformanceOptions WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#network_performance_options WorkspacesinstancesWorkspaceInstance#network_performance_options}.

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.placement"></a>

```go
Placement WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#placement WorkspacesinstancesWorkspaceInstance#placement}.

---

##### `PrivateDnsNameOptions`<sup>Optional</sup> <a name="PrivateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.privateDnsNameOptions"></a>

```go
PrivateDnsNameOptions WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#private_dns_name_options WorkspacesinstancesWorkspaceInstance#private_dns_name_options}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}.

---

##### `TagSpecifications`<sup>Optional</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.tagSpecifications"></a>

```go
TagSpecifications interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#tag_specifications WorkspacesinstancesWorkspaceInstance#tag_specifications}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#user_data WorkspacesinstancesWorkspaceInstance#user_data}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings {
	DeviceName: *string,
	Ebs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs,
	NoDevice: *string,
	VirtualName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#device_name WorkspacesinstancesWorkspaceInstance#device_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#ebs WorkspacesinstancesWorkspaceInstance#ebs}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#no_device WorkspacesinstancesWorkspaceInstance#no_device}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#virtual_name WorkspacesinstancesWorkspaceInstance#virtual_name}. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#device_name WorkspacesinstancesWorkspaceInstance#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.ebs"></a>

```go
Ebs WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#ebs WorkspacesinstancesWorkspaceInstance#ebs}.

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.noDevice"></a>

```go
NoDevice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#no_device WorkspacesinstancesWorkspaceInstance#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.virtualName"></a>

```go
VirtualName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#virtual_name WorkspacesinstancesWorkspaceInstance#virtual_name}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs {
	Encrypted: interface{},
	Iops: *f64,
	KmsKeyId: *string,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#encrypted WorkspacesinstancesWorkspaceInstance#encrypted}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#iops WorkspacesinstancesWorkspaceInstance#iops}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#kms_key_id WorkspacesinstancesWorkspaceInstance#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#throughput WorkspacesinstancesWorkspaceInstance#throughput}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#volume_size WorkspacesinstancesWorkspaceInstance#volume_size}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#volume_type WorkspacesinstancesWorkspaceInstance#volume_type}. |

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#encrypted WorkspacesinstancesWorkspaceInstance#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#iops WorkspacesinstancesWorkspaceInstance#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#kms_key_id WorkspacesinstancesWorkspaceInstance#kms_key_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#throughput WorkspacesinstancesWorkspaceInstance#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#volume_size WorkspacesinstancesWorkspaceInstance#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#volume_type WorkspacesinstancesWorkspaceInstance#volume_type}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification {
	CapacityReservationPreference: *string,
	CapacityReservationTarget: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_preference WorkspacesinstancesWorkspaceInstance#capacity_reservation_preference}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_target WorkspacesinstancesWorkspaceInstance#capacity_reservation_target}. |

---

##### `CapacityReservationPreference`<sup>Optional</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationPreference"></a>

```go
CapacityReservationPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_preference WorkspacesinstancesWorkspaceInstance#capacity_reservation_preference}.

---

##### `CapacityReservationTarget`<sup>Optional</sup> <a name="CapacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationTarget"></a>

```go
CapacityReservationTarget WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_target WorkspacesinstancesWorkspaceInstance#capacity_reservation_target}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget {
	CapacityReservationId: *string,
	CapacityReservationResourceGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_id WorkspacesinstancesWorkspaceInstance#capacity_reservation_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_resource_group_arn WorkspacesinstancesWorkspaceInstance#capacity_reservation_resource_group_arn}. |

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_id WorkspacesinstancesWorkspaceInstance#capacity_reservation_id}.

---

##### `CapacityReservationResourceGroupArn`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```go
CapacityReservationResourceGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_resource_group_arn WorkspacesinstancesWorkspaceInstance#capacity_reservation_resource_group_arn}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions {
	CoreCount: *f64,
	ThreadsPerCore: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.coreCount">CoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#core_count WorkspacesinstancesWorkspaceInstance#core_count}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#threads_per_core WorkspacesinstancesWorkspaceInstance#threads_per_core}. |

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.coreCount"></a>

```go
CoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#core_count WorkspacesinstancesWorkspaceInstance#core_count}.

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.threadsPerCore"></a>

```go
ThreadsPerCore *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#threads_per_core WorkspacesinstancesWorkspaceInstance#threads_per_core}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification {
	CpuCredits: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#cpu_credits WorkspacesinstancesWorkspaceInstance#cpu_credits}. |

---

##### `CpuCredits`<sup>Optional</sup> <a name="CpuCredits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.property.cpuCredits"></a>

```go
CpuCredits *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#cpu_credits WorkspacesinstancesWorkspaceInstance#cpu_credits}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions {
	Configured: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.property.configured">Configured</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#configured WorkspacesinstancesWorkspaceInstance#configured}. |

---

##### `Configured`<sup>Optional</sup> <a name="Configured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.property.configured"></a>

```go
Configured interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#configured WorkspacesinstancesWorkspaceInstance#configured}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile {
	Arn: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#arn WorkspacesinstancesWorkspaceInstance#arn}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#name WorkspacesinstancesWorkspaceInstance#name}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#arn WorkspacesinstancesWorkspaceInstance#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#name WorkspacesinstancesWorkspaceInstance#name}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications {
	LicenseConfigurationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#license_configuration_arn WorkspacesinstancesWorkspaceInstance#license_configuration_arn}. |

---

##### `LicenseConfigurationArn`<sup>Optional</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.property.licenseConfigurationArn"></a>

```go
LicenseConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#license_configuration_arn WorkspacesinstancesWorkspaceInstance#license_configuration_arn}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions {
	AutoRecovery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#auto_recovery WorkspacesinstancesWorkspaceInstance#auto_recovery}. |

---

##### `AutoRecovery`<sup>Optional</sup> <a name="AutoRecovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.property.autoRecovery"></a>

```go
AutoRecovery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#auto_recovery WorkspacesinstancesWorkspaceInstance#auto_recovery}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions {
	HttpEndpoint: *string,
	HttpProtocolIpv6: *string,
	HttpPutResponseHopLimit: *f64,
	HttpTokens: *string,
	InstanceMetadataTags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#http_endpoint WorkspacesinstancesWorkspaceInstance#http_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#http_protocol_ipv_6 WorkspacesinstancesWorkspaceInstance#http_protocol_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#http_put_response_hop_limit WorkspacesinstancesWorkspaceInstance#http_put_response_hop_limit}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#http_tokens WorkspacesinstancesWorkspaceInstance#http_tokens}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#instance_metadata_tags WorkspacesinstancesWorkspaceInstance#instance_metadata_tags}. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpEndpoint"></a>

```go
HttpEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#http_endpoint WorkspacesinstancesWorkspaceInstance#http_endpoint}.

---

##### `HttpProtocolIpv6`<sup>Optional</sup> <a name="HttpProtocolIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpProtocolIpv6"></a>

```go
HttpProtocolIpv6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#http_protocol_ipv_6 WorkspacesinstancesWorkspaceInstance#http_protocol_ipv_6}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```go
HttpPutResponseHopLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#http_put_response_hop_limit WorkspacesinstancesWorkspaceInstance#http_put_response_hop_limit}.

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpTokens"></a>

```go
HttpTokens *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#http_tokens WorkspacesinstancesWorkspaceInstance#http_tokens}.

---

##### `InstanceMetadataTags`<sup>Optional</sup> <a name="InstanceMetadataTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.instanceMetadataTags"></a>

```go
InstanceMetadataTags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#instance_metadata_tags WorkspacesinstancesWorkspaceInstance#instance_metadata_tags}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces {
	Description: *string,
	DeviceIndex: *f64,
	Groups: *[]*string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#description WorkspacesinstancesWorkspaceInstance#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#device_index WorkspacesinstancesWorkspaceInstance#device_index}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.groups">Groups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#groups WorkspacesinstancesWorkspaceInstance#groups}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#description WorkspacesinstancesWorkspaceInstance#description}.

---

##### `DeviceIndex`<sup>Optional</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.deviceIndex"></a>

```go
DeviceIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#device_index WorkspacesinstancesWorkspaceInstance#device_index}.

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.groups"></a>

```go
Groups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#groups WorkspacesinstancesWorkspaceInstance#groups}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions {
	BandwidthWeighting: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.property.bandwidthWeighting">BandwidthWeighting</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#bandwidth_weighting WorkspacesinstancesWorkspaceInstance#bandwidth_weighting}. |

---

##### `BandwidthWeighting`<sup>Optional</sup> <a name="BandwidthWeighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.property.bandwidthWeighting"></a>

```go
BandwidthWeighting *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#bandwidth_weighting WorkspacesinstancesWorkspaceInstance#bandwidth_weighting}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement {
	AvailabilityZone: *string,
	GroupId: *string,
	GroupName: *string,
	PartitionNumber: *f64,
	Tenancy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#availability_zone WorkspacesinstancesWorkspaceInstance#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#group_id WorkspacesinstancesWorkspaceInstance#group_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#group_name WorkspacesinstancesWorkspaceInstance#group_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.partitionNumber">PartitionNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#partition_number WorkspacesinstancesWorkspaceInstance#partition_number}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.tenancy">Tenancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#tenancy WorkspacesinstancesWorkspaceInstance#tenancy}. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#availability_zone WorkspacesinstancesWorkspaceInstance#availability_zone}.

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#group_id WorkspacesinstancesWorkspaceInstance#group_id}.

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#group_name WorkspacesinstancesWorkspaceInstance#group_name}.

---

##### `PartitionNumber`<sup>Optional</sup> <a name="PartitionNumber" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.partitionNumber"></a>

```go
PartitionNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#partition_number WorkspacesinstancesWorkspaceInstance#partition_number}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.tenancy"></a>

```go
Tenancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#tenancy WorkspacesinstancesWorkspaceInstance#tenancy}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions {
	EnableResourceNameDnsAaaaRecord: interface{},
	EnableResourceNameDnsARecord: interface{},
	HostnameType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_aaaa_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_a_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.hostnameType">HostnameType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#hostname_type WorkspacesinstancesWorkspaceInstance#hostname_type}. |

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```go
EnableResourceNameDnsAaaaRecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_aaaa_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_aaaa_record}.

---

##### `EnableResourceNameDnsARecord`<sup>Optional</sup> <a name="EnableResourceNameDnsARecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```go
EnableResourceNameDnsARecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_a_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_a_record}.

---

##### `HostnameType`<sup>Optional</sup> <a name="HostnameType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.hostnameType"></a>

```go
HostnameType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#hostname_type WorkspacesinstancesWorkspaceInstance#hostname_type}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications {
	ResourceType: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#resource_type WorkspacesinstancesWorkspaceInstance#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#resource_type WorkspacesinstancesWorkspaceInstance#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}.

---

### WorkspacesinstancesWorkspaceInstanceTags <a name="WorkspacesinstancesWorkspaceInstanceTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

&workspacesinstancesworkspaceinstance.WorkspacesinstancesWorkspaceInstanceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference <a name="WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get"></a>

```go
func Get(index *f64) WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs"></a>

```go
func PutEbs(value WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetEbs"></a>

```go
func ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```go
func ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```go
func ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```go
func Ebs() WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```go
func EbsInput() interface{}
```

- *Type:* interface{}

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```go
func NoDeviceInput() *string
```

- *Type:* *string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```go
func VirtualNameInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```go
func NoDevice() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">ResetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetCapacityReservationResourceGroupArn` <a name="ResetCapacityReservationResourceGroupArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```go
func ResetCapacityReservationResourceGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">CapacityReservationResourceGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArnInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```go
func CapacityReservationResourceGroupArnInput() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `CapacityReservationResourceGroupArn`<sup>Required</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```go
func CapacityReservationResourceGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">PutCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">ResetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">ResetCapacityReservationTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationTarget` <a name="PutCapacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```go
func PutCapacityReservationTarget(value WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `ResetCapacityReservationPreference` <a name="ResetCapacityReservationPreference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```go
func ResetCapacityReservationPreference()
```

##### `ResetCapacityReservationTarget` <a name="ResetCapacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```go
func ResetCapacityReservationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">CapacityReservationPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">CapacityReservationTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```go
func CapacityReservationTarget() WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `CapacityReservationPreferenceInput`<sup>Optional</sup> <a name="CapacityReservationPreferenceInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```go
func CapacityReservationPreferenceInput() *string
```

- *Type:* *string

---

##### `CapacityReservationTargetInput`<sup>Optional</sup> <a name="CapacityReservationTargetInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```go
func CapacityReservationTargetInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```go
func CapacityReservationPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetCoreCount"></a>

```go
func ResetCoreCount()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetThreadsPerCore"></a>

```go
func ResetThreadsPerCore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCountInput">CoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCountInput"></a>

```go
func CoreCountInput() *f64
```

- *Type:* *f64

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```go
func ThreadsPerCoreInput() *f64
```

- *Type:* *f64

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resetCpuCredits">ResetCpuCredits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuCredits` <a name="ResetCpuCredits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```go
func ResetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCreditsInput">CpuCreditsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCreditsInput`<sup>Optional</sup> <a name="CpuCreditsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```go
func CpuCreditsInput() *string
```

- *Type:* *string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```go
func CpuCredits() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resetConfigured">ResetConfigured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigured` <a name="ResetConfigured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resetConfigured"></a>

```go
func ResetConfigured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configuredInput">ConfiguredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured">Configured</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfiguredInput`<sup>Optional</sup> <a name="ConfiguredInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configuredInput"></a>

```go
func ConfiguredInput() interface{}
```

- *Type:* interface{}

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured"></a>

```go
func Configured() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get"></a>

```go
func Get(index *f64) WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn">ResetLicenseConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLicenseConfigurationArn` <a name="ResetLicenseConfigurationArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn"></a>

```go
func ResetLicenseConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput">LicenseConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArnInput`<sup>Optional</sup> <a name="LicenseConfigurationArnInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput"></a>

```go
func LicenseConfigurationArnInput() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```go
func LicenseConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resetAutoRecovery">ResetAutoRecovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRecovery` <a name="ResetAutoRecovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```go
func ResetAutoRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput">AutoRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery">AutoRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRecoveryInput`<sup>Optional</sup> <a name="AutoRecoveryInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```go
func AutoRecoveryInput() *string
```

- *Type:* *string

---

##### `AutoRecovery`<sup>Required</sup> <a name="AutoRecovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```go
func AutoRecovery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6">ResetHttpProtocolIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">ResetInstanceMetadataTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```go
func ResetHttpEndpoint()
```

##### `ResetHttpProtocolIpv6` <a name="ResetHttpProtocolIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```go
func ResetHttpProtocolIpv6()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```go
func ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```go
func ResetHttpTokens()
```

##### `ResetInstanceMetadataTags` <a name="ResetInstanceMetadataTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```go
func ResetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input">HttpProtocolIpv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">InstanceMetadataTagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```go
func HttpEndpointInput() *string
```

- *Type:* *string

---

##### `HttpProtocolIpv6Input`<sup>Optional</sup> <a name="HttpProtocolIpv6Input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```go
func HttpProtocolIpv6Input() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```go
func HttpPutResponseHopLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```go
func HttpTokensInput() *string
```

- *Type:* *string

---

##### `InstanceMetadataTagsInput`<sup>Optional</sup> <a name="InstanceMetadataTagsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```go
func InstanceMetadataTagsInput() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpProtocolIpv6`<sup>Required</sup> <a name="HttpProtocolIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```go
func HttpProtocolIpv6() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```go
func InstanceMetadataTags() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get"></a>

```go
func Get(index *f64) WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDeviceIndex">ResetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeviceIndex` <a name="ResetDeviceIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```go
func ResetDeviceIndex()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetGroups"></a>

```go
func ResetGroups()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groupsInput">GroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```go
func DeviceIndexInput() *f64
```

- *Type:* *f64

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groupsInput"></a>

```go
func GroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resetBandwidthWeighting">ResetBandwidthWeighting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthWeighting` <a name="ResetBandwidthWeighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resetBandwidthWeighting"></a>

```go
func ResetBandwidthWeighting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeightingInput">BandwidthWeightingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting">BandwidthWeighting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BandwidthWeightingInput`<sup>Optional</sup> <a name="BandwidthWeightingInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeightingInput"></a>

```go
func BandwidthWeightingInput() *string
```

- *Type:* *string

---

##### `BandwidthWeighting`<sup>Required</sup> <a name="BandwidthWeighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting"></a>

```go
func BandwidthWeighting() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification">PutCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions">PutCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCreditSpecification">PutCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putEnclaveOptions">PutEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putHibernationOptions">PutHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile">PutIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putLicenseSpecifications">PutLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMaintenanceOptions">PutMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkPerformanceOptions">PutNetworkPerformanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions">PutPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putTagSpecifications">PutTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCapacityReservationSpecification">ResetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCpuOptions">ResetCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCreditSpecification">ResetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetDisableApiStop">ResetDisableApiStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnablePrimaryIpv6">ResetEnablePrimaryIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnclaveOptions">ResetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetHibernationOptions">ResetHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetLicenseSpecifications">ResetLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMaintenanceOptions">ResetMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkPerformanceOptions">ResetNetworkPerformanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPrivateDnsNameOptions">ResetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetTagSpecifications">ResetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putBlockDeviceMappings"></a>

```go
func PutBlockDeviceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putBlockDeviceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCapacityReservationSpecification` <a name="PutCapacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification"></a>

```go
func PutCapacityReservationSpecification(value WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

---

##### `PutCpuOptions` <a name="PutCpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions"></a>

```go
func PutCpuOptions(value WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

---

##### `PutCreditSpecification` <a name="PutCreditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCreditSpecification"></a>

```go
func PutCreditSpecification(value WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

---

##### `PutEnclaveOptions` <a name="PutEnclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putEnclaveOptions"></a>

```go
func PutEnclaveOptions(value WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

---

##### `PutHibernationOptions` <a name="PutHibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putHibernationOptions"></a>

```go
func PutHibernationOptions(value WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putHibernationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

---

##### `PutIamInstanceProfile` <a name="PutIamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile"></a>

```go
func PutIamInstanceProfile(value WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

---

##### `PutLicenseSpecifications` <a name="PutLicenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putLicenseSpecifications"></a>

```go
func PutLicenseSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putLicenseSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaintenanceOptions` <a name="PutMaintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMaintenanceOptions"></a>

```go
func PutMaintenanceOptions(value WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions"></a>

```go
func PutMetadataOptions(value WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

---

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMonitoring"></a>

```go
func PutMonitoring(value WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

---

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkInterfaces"></a>

```go
func PutNetworkInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkPerformanceOptions` <a name="PutNetworkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkPerformanceOptions"></a>

```go
func PutNetworkPerformanceOptions(value WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkPerformanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement"></a>

```go
func PutPlacement(value WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

---

##### `PutPrivateDnsNameOptions` <a name="PutPrivateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions"></a>

```go
func PutPrivateDnsNameOptions(value WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

---

##### `PutTagSpecifications` <a name="PutTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putTagSpecifications"></a>

```go
func PutTagSpecifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putTagSpecifications.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetBlockDeviceMappings"></a>

```go
func ResetBlockDeviceMappings()
```

##### `ResetCapacityReservationSpecification` <a name="ResetCapacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCapacityReservationSpecification"></a>

```go
func ResetCapacityReservationSpecification()
```

##### `ResetCpuOptions` <a name="ResetCpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCpuOptions"></a>

```go
func ResetCpuOptions()
```

##### `ResetCreditSpecification` <a name="ResetCreditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCreditSpecification"></a>

```go
func ResetCreditSpecification()
```

##### `ResetDisableApiStop` <a name="ResetDisableApiStop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetDisableApiStop"></a>

```go
func ResetDisableApiStop()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEbsOptimized"></a>

```go
func ResetEbsOptimized()
```

##### `ResetEnablePrimaryIpv6` <a name="ResetEnablePrimaryIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnablePrimaryIpv6"></a>

```go
func ResetEnablePrimaryIpv6()
```

##### `ResetEnclaveOptions` <a name="ResetEnclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnclaveOptions"></a>

```go
func ResetEnclaveOptions()
```

##### `ResetHibernationOptions` <a name="ResetHibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetHibernationOptions"></a>

```go
func ResetHibernationOptions()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIamInstanceProfile"></a>

```go
func ResetIamInstanceProfile()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIpv6AddressCount"></a>

```go
func ResetIpv6AddressCount()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetLicenseSpecifications` <a name="ResetLicenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetLicenseSpecifications"></a>

```go
func ResetLicenseSpecifications()
```

##### `ResetMaintenanceOptions` <a name="ResetMaintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMaintenanceOptions"></a>

```go
func ResetMaintenanceOptions()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMetadataOptions"></a>

```go
func ResetMetadataOptions()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkInterfaces"></a>

```go
func ResetNetworkInterfaces()
```

##### `ResetNetworkPerformanceOptions` <a name="ResetNetworkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkPerformanceOptions"></a>

```go
func ResetNetworkPerformanceOptions()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPlacement"></a>

```go
func ResetPlacement()
```

##### `ResetPrivateDnsNameOptions` <a name="ResetPrivateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPrivateDnsNameOptions"></a>

```go
func ResetPrivateDnsNameOptions()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTagSpecifications` <a name="ResetTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetTagSpecifications"></a>

```go
func ResetTagSpecifications()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetUserData"></a>

```go
func ResetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications">LicenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions">NetworkPerformanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecificationInput">CapacityReservationSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptionsInput">CpuOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecificationInput">CreditSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStopInput">DisableApiStopInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6Input">EnablePrimaryIpv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptionsInput">EnclaveOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptionsInput">HibernationOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecificationsInput">LicenseSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptionsInput">MaintenanceOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoringInput">MonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptionsInput">NetworkPerformanceOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placementInput">PlacementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptionsInput">PrivateDnsNameOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecificationsInput">TagSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop">DisableApiStop</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6">EnablePrimaryIpv6</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings"></a>

```go
func BlockDeviceMappings() WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a>

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification"></a>

```go
func CapacityReservationSpecification() WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a>

---

##### `CpuOptions`<sup>Required</sup> <a name="CpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions"></a>

```go
func CpuOptions() WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification"></a>

```go
func CreditSpecification() WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a>

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions"></a>

```go
func EnclaveOptions() WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a>

---

##### `HibernationOptions`<sup>Required</sup> <a name="HibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions"></a>

```go
func HibernationOptions() WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a>

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a>

---

##### `LicenseSpecifications`<sup>Required</sup> <a name="LicenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications"></a>

```go
func LicenseSpecifications() WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a>

---

##### `MaintenanceOptions`<sup>Required</sup> <a name="MaintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions"></a>

```go
func MaintenanceOptions() WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions"></a>

```go
func MetadataOptions() WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring"></a>

```go
func Monitoring() WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces"></a>

```go
func NetworkInterfaces() WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a>

---

##### `NetworkPerformanceOptions`<sup>Required</sup> <a name="NetworkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions"></a>

```go
func NetworkPerformanceOptions() WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement"></a>

```go
func Placement() WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a>

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions"></a>

```go
func PrivateDnsNameOptions() WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a>

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications"></a>

```go
func TagSpecifications() WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a>

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappingsInput"></a>

```go
func BlockDeviceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityReservationSpecificationInput`<sup>Optional</sup> <a name="CapacityReservationSpecificationInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecificationInput"></a>

```go
func CapacityReservationSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `CpuOptionsInput`<sup>Optional</sup> <a name="CpuOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptionsInput"></a>

```go
func CpuOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `CreditSpecificationInput`<sup>Optional</sup> <a name="CreditSpecificationInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecificationInput"></a>

```go
func CreditSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `DisableApiStopInput`<sup>Optional</sup> <a name="DisableApiStopInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStopInput"></a>

```go
func DisableApiStopInput() interface{}
```

- *Type:* interface{}

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimizedInput"></a>

```go
func EbsOptimizedInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePrimaryIpv6Input`<sup>Optional</sup> <a name="EnablePrimaryIpv6Input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6Input"></a>

```go
func EnablePrimaryIpv6Input() interface{}
```

- *Type:* interface{}

---

##### `EnclaveOptionsInput`<sup>Optional</sup> <a name="EnclaveOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptionsInput"></a>

```go
func EnclaveOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `HibernationOptionsInput`<sup>Optional</sup> <a name="HibernationOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptionsInput"></a>

```go
func HibernationOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() interface{}
```

- *Type:* interface{}

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCountInput"></a>

```go
func Ipv6AddressCountInput() *f64
```

- *Type:* *f64

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `LicenseSpecificationsInput`<sup>Optional</sup> <a name="LicenseSpecificationsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecificationsInput"></a>

```go
func LicenseSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceOptionsInput`<sup>Optional</sup> <a name="MaintenanceOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptionsInput"></a>

```go
func MaintenanceOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptionsInput"></a>

```go
func MetadataOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoringInput"></a>

```go
func MonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfacesInput"></a>

```go
func NetworkInterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkPerformanceOptionsInput`<sup>Optional</sup> <a name="NetworkPerformanceOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptionsInput"></a>

```go
func NetworkPerformanceOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placementInput"></a>

```go
func PlacementInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateDnsNameOptionsInput`<sup>Optional</sup> <a name="PrivateDnsNameOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptionsInput"></a>

```go
func PrivateDnsNameOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagSpecificationsInput`<sup>Optional</sup> <a name="TagSpecificationsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecificationsInput"></a>

```go
func TagSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `DisableApiStop`<sup>Required</sup> <a name="DisableApiStop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop"></a>

```go
func DisableApiStop() interface{}
```

- *Type:* interface{}

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized"></a>

```go
func EbsOptimized() interface{}
```

- *Type:* interface{}

---

##### `EnablePrimaryIpv6`<sup>Required</sup> <a name="EnablePrimaryIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6"></a>

```go
func EnablePrimaryIpv6() interface{}
```

- *Type:* interface{}

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount"></a>

```go
func Ipv6AddressCount() *f64
```

- *Type:* *f64

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetPartitionNumber">ResetPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetTenancy">ResetTenancy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupName"></a>

```go
func ResetGroupName()
```

##### `ResetPartitionNumber` <a name="ResetPartitionNumber" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetPartitionNumber"></a>

```go
func ResetPartitionNumber()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetTenancy"></a>

```go
func ResetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumberInput">PartitionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancyInput">TenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber">PartitionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `PartitionNumberInput`<sup>Optional</sup> <a name="PartitionNumberInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumberInput"></a>

```go
func PartitionNumberInput() *f64
```

- *Type:* *f64

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancyInput"></a>

```go
func TenancyInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `PartitionNumber`<sup>Required</sup> <a name="PartitionNumber" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber"></a>

```go
func PartitionNumber() *f64
```

- *Type:* *f64

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">ResetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">ResetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetHostnameType">ResetHostnameType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableResourceNameDnsAaaaRecord` <a name="ResetEnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```go
func ResetEnableResourceNameDnsAaaaRecord()
```

##### `ResetEnableResourceNameDnsARecord` <a name="ResetEnableResourceNameDnsARecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```go
func ResetEnableResourceNameDnsARecord()
```

##### `ResetHostnameType` <a name="ResetHostnameType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```go
func ResetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">EnableResourceNameDnsAaaaRecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">EnableResourceNameDnsARecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">HostnameTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```go
func EnableResourceNameDnsAaaaRecordInput() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```go
func EnableResourceNameDnsARecordInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameTypeInput`<sup>Optional</sup> <a name="HostnameTypeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```go
func HostnameTypeInput() *string
```

- *Type:* *string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```go
func EnableResourceNameDnsAaaaRecord() interface{}
```

- *Type:* interface{}

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```go
func EnableResourceNameDnsARecord() interface{}
```

- *Type:* interface{}

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```go
func HostnameType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get"></a>

```go
func Get(index *f64) WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags"></a>

```go
func Tags() WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get"></a>

```go
func Get(index *f64) WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceTagsList <a name="WorkspacesinstancesWorkspaceInstanceTagsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesinstancesWorkspaceInstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.get"></a>

```go
func Get(index *f64) WorkspacesinstancesWorkspaceInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesinstancesWorkspaceInstanceTagsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceTagsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesworkspaceinstance"

workspacesinstancesworkspaceinstance.NewWorkspacesinstancesWorkspaceInstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesinstancesWorkspaceInstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



