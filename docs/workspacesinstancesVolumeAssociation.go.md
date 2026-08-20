# `workspacesinstancesVolumeAssociation` Submodule <a name="`workspacesinstancesVolumeAssociation` Submodule" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesinstancesVolumeAssociation <a name="WorkspacesinstancesVolumeAssociation" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association awscc_workspacesinstances_volume_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesvolumeassociation"

workspacesinstancesvolumeassociation.NewWorkspacesinstancesVolumeAssociation(scope Construct, id *string, config WorkspacesinstancesVolumeAssociationConfig) WorkspacesinstancesVolumeAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig">WorkspacesinstancesVolumeAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig">WorkspacesinstancesVolumeAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.resetDisassociateMode">ResetDisassociateMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisassociateMode` <a name="ResetDisassociateMode" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.resetDisassociateMode"></a>

```go
func ResetDisassociateMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesinstancesVolumeAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesvolumeassociation"

workspacesinstancesvolumeassociation.WorkspacesinstancesVolumeAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesvolumeassociation"

workspacesinstancesvolumeassociation.WorkspacesinstancesVolumeAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesvolumeassociation"

workspacesinstancesvolumeassociation.WorkspacesinstancesVolumeAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesvolumeassociation"

workspacesinstancesvolumeassociation.WorkspacesinstancesVolumeAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkspacesinstancesVolumeAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspacesinstancesVolumeAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspacesinstancesVolumeAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesinstancesVolumeAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.deviceInput">DeviceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.disassociateModeInput">DisassociateModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.workspaceInstanceIdInput">WorkspaceInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.device">Device</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.disassociateMode">DisassociateMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.workspaceInstanceId">WorkspaceInstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DeviceInput`<sup>Optional</sup> <a name="DeviceInput" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.deviceInput"></a>

```go
func DeviceInput() *string
```

- *Type:* *string

---

##### `DisassociateModeInput`<sup>Optional</sup> <a name="DisassociateModeInput" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.disassociateModeInput"></a>

```go
func DisassociateModeInput() *string
```

- *Type:* *string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceInstanceIdInput`<sup>Optional</sup> <a name="WorkspaceInstanceIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.workspaceInstanceIdInput"></a>

```go
func WorkspaceInstanceIdInput() *string
```

- *Type:* *string

---

##### `Device`<sup>Required</sup> <a name="Device" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.device"></a>

```go
func Device() *string
```

- *Type:* *string

---

##### `DisassociateMode`<sup>Required</sup> <a name="DisassociateMode" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.disassociateMode"></a>

```go
func DisassociateMode() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `WorkspaceInstanceId`<sup>Required</sup> <a name="WorkspaceInstanceId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.workspaceInstanceId"></a>

```go
func WorkspaceInstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesinstancesVolumeAssociationConfig <a name="WorkspacesinstancesVolumeAssociationConfig" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesinstancesvolumeassociation"

&workspacesinstancesvolumeassociation.WorkspacesinstancesVolumeAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Device: *string,
	VolumeId: *string,
	WorkspaceInstanceId: *string,
	DisassociateMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.device">Device</a></code> | <code>*string</code> | The device name for the volume attachment. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.volumeId">VolumeId</a></code> | <code>*string</code> | ID of the volume to attach to the workspace instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.workspaceInstanceId">WorkspaceInstanceId</a></code> | <code>*string</code> | ID of the workspace instance to associate with the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.disassociateMode">DisassociateMode</a></code> | <code>*string</code> | Mode to use when disassociating the volume. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Device`<sup>Required</sup> <a name="Device" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.device"></a>

```go
Device *string
```

- *Type:* *string

The device name for the volume attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#device WorkspacesinstancesVolumeAssociation#device}

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

ID of the volume to attach to the workspace instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#volume_id WorkspacesinstancesVolumeAssociation#volume_id}

---

##### `WorkspaceInstanceId`<sup>Required</sup> <a name="WorkspaceInstanceId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.workspaceInstanceId"></a>

```go
WorkspaceInstanceId *string
```

- *Type:* *string

ID of the workspace instance to associate with the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#workspace_instance_id WorkspacesinstancesVolumeAssociation#workspace_instance_id}

---

##### `DisassociateMode`<sup>Optional</sup> <a name="DisassociateMode" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.disassociateMode"></a>

```go
DisassociateMode *string
```

- *Type:* *string

Mode to use when disassociating the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_volume_association#disassociate_mode WorkspacesinstancesVolumeAssociation#disassociate_mode}

---



