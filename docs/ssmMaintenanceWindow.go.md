# `ssmMaintenanceWindow` Submodule <a name="`ssmMaintenanceWindow` Submodule" id="@cdktn/provider-awscc.ssmMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindow <a name="SsmMaintenanceWindow" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window awscc_ssm_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmmaintenancewindow"

ssmmaintenancewindow.NewSsmMaintenanceWindow(scope Construct, id *string, config SsmMaintenanceWindowConfig) SsmMaintenanceWindow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig">SsmMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig">SsmMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset">ResetScheduleOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone">ResetScheduleTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetScheduleOffset` <a name="ResetScheduleOffset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset"></a>

```go
func ResetScheduleOffset()
```

##### `ResetScheduleTimezone` <a name="ResetScheduleTimezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone"></a>

```go
func ResetScheduleTimezone()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate"></a>

```go
func ResetStartDate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmMaintenanceWindow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmmaintenancewindow"

ssmmaintenancewindow.SsmMaintenanceWindow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmmaintenancewindow"

ssmmaintenancewindow.SsmMaintenanceWindow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmmaintenancewindow"

ssmmaintenancewindow.SsmMaintenanceWindow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmmaintenancewindow"

ssmmaintenancewindow.SsmMaintenanceWindow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmMaintenanceWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList">SsmMaintenanceWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.windowId">WindowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput">AllowUnassociatedTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput">CutoffInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput">ScheduleOffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput">ScheduleTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets">AllowUnassociatedTargets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff">Cutoff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset">ScheduleOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone">ScheduleTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags"></a>

```go
func Tags() SsmMaintenanceWindowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList">SsmMaintenanceWindowTagsList</a>

---

##### `WindowId`<sup>Required</sup> <a name="WindowId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.windowId"></a>

```go
func WindowId() *string
```

- *Type:* *string

---

##### `AllowUnassociatedTargetsInput`<sup>Optional</sup> <a name="AllowUnassociatedTargetsInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput"></a>

```go
func AllowUnassociatedTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `CutoffInput`<sup>Optional</sup> <a name="CutoffInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput"></a>

```go
func CutoffInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `ScheduleOffsetInput`<sup>Optional</sup> <a name="ScheduleOffsetInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput"></a>

```go
func ScheduleOffsetInput() *f64
```

- *Type:* *f64

---

##### `ScheduleTimezoneInput`<sup>Optional</sup> <a name="ScheduleTimezoneInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput"></a>

```go
func ScheduleTimezoneInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUnassociatedTargets`<sup>Required</sup> <a name="AllowUnassociatedTargets" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets"></a>

```go
func AllowUnassociatedTargets() interface{}
```

- *Type:* interface{}

---

##### `Cutoff`<sup>Required</sup> <a name="Cutoff" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff"></a>

```go
func Cutoff() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `ScheduleOffset`<sup>Required</sup> <a name="ScheduleOffset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset"></a>

```go
func ScheduleOffset() *f64
```

- *Type:* *f64

---

##### `ScheduleTimezone`<sup>Required</sup> <a name="ScheduleTimezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone"></a>

```go
func ScheduleTimezone() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowConfig <a name="SsmMaintenanceWindowConfig" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmmaintenancewindow"

&ssmmaintenancewindow.SsmMaintenanceWindowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AllowUnassociatedTargets: interface{},
	Cutoff: *f64,
	Duration: *f64,
	Name: *string,
	Schedule: *string,
	Description: *string,
	EndDate: *string,
	ScheduleOffset: *f64,
	ScheduleTimezone: *string,
	StartDate: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets">AllowUnassociatedTargets</a></code> | <code>interface{}</code> | Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff">Cutoff</a></code> | <code>*f64</code> | The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration">Duration</a></code> | <code>*f64</code> | The duration of the maintenance window in hours. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name">Name</a></code> | <code>*string</code> | The name of the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule">Schedule</a></code> | <code>*string</code> | The schedule of the maintenance window in the form of a cron or rate expression. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description">Description</a></code> | <code>*string</code> | A description of the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate">EndDate</a></code> | <code>*string</code> | The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset">ScheduleOffset</a></code> | <code>*f64</code> | The number of days to wait to run a maintenance window after the scheduled cron expression date and time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone">ScheduleTimezone</a></code> | <code>*string</code> | The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate">StartDate</a></code> | <code>*string</code> | The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowUnassociatedTargets`<sup>Required</sup> <a name="AllowUnassociatedTargets" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets"></a>

```go
AllowUnassociatedTargets interface{}
```

- *Type:* interface{}

Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets.

If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}

---

##### `Cutoff`<sup>Required</sup> <a name="Cutoff" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff"></a>

```go
Cutoff *f64
```

- *Type:* *f64

The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

The duration of the maintenance window in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#name SsmMaintenanceWindow#name}

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

The schedule of the maintenance window in the form of a cron or rate expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#description SsmMaintenanceWindow#description}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}

---

##### `ScheduleOffset`<sup>Optional</sup> <a name="ScheduleOffset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset"></a>

```go
ScheduleOffset *f64
```

- *Type:* *f64

The number of days to wait to run a maintenance window after the scheduled cron expression date and time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}

---

##### `ScheduleTimezone`<sup>Optional</sup> <a name="ScheduleTimezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone"></a>

```go
ScheduleTimezone *string
```

- *Type:* *string

The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.

StartDate allows you to delay activation of the maintenance window until the specified future date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs).

Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}

---

### SsmMaintenanceWindowTags <a name="SsmMaintenanceWindowTags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmmaintenancewindow"

&ssmmaintenancewindow.SsmMaintenanceWindowTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.key">Key</a></code> | <code>*string</code> | The name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#key SsmMaintenanceWindow#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_maintenance_window#value SsmMaintenanceWindow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmMaintenanceWindowTagsList <a name="SsmMaintenanceWindowTagsList" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmmaintenancewindow"

ssmmaintenancewindow.NewSsmMaintenanceWindowTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmMaintenanceWindowTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.get"></a>

```go
func Get(index *f64) SsmMaintenanceWindowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmMaintenanceWindowTagsOutputReference <a name="SsmMaintenanceWindowTagsOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmmaintenancewindow"

ssmmaintenancewindow.NewSsmMaintenanceWindowTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmMaintenanceWindowTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



