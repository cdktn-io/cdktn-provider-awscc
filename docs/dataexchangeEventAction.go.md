# `dataexchangeEventAction` Submodule <a name="`dataexchangeEventAction` Submodule" id="@cdktn/provider-awscc.dataexchangeEventAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataexchangeEventAction <a name="DataexchangeEventAction" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action awscc_dataexchange_event_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.NewDataexchangeEventAction(scope Construct, id *string, config DataexchangeEventActionConfig) DataexchangeEventAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig">DataexchangeEventActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig">DataexchangeEventActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putEvent">PutEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putAction"></a>

```go
func PutAction(value DataexchangeEventActionAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

---

##### `PutEvent` <a name="PutEvent" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putEvent"></a>

```go
func PutEvent(value DataexchangeEventActionEvent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putEvent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataexchangeEventAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.DataexchangeEventAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.DataexchangeEventAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.DataexchangeEventAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.DataexchangeEventAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataexchangeEventAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataexchangeEventAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataexchangeEventAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataexchangeEventAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference">DataexchangeEventActionActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.event">Event</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference">DataexchangeEventActionEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventActionId">EventActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList">DataexchangeEventActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventInput">EventInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.action"></a>

```go
func Action() DataexchangeEventActionActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference">DataexchangeEventActionActionOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.event"></a>

```go
func Event() DataexchangeEventActionEventOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference">DataexchangeEventActionEventOutputReference</a>

---

##### `EventActionId`<sup>Required</sup> <a name="EventActionId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventActionId"></a>

```go
func EventActionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tags"></a>

```go
func Tags() DataexchangeEventActionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList">DataexchangeEventActionTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventInput"></a>

```go
func EventInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataexchangeEventActionAction <a name="DataexchangeEventActionAction" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

&dataexchangeeventaction.DataexchangeEventActionAction {
	ExportRevisionToS3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3">ExportRevisionToS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a></code> | Details of the operation to be performed by the job. |

---

##### `ExportRevisionToS3`<sup>Optional</sup> <a name="ExportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3"></a>

```go
ExportRevisionToS3 DataexchangeEventActionActionExportRevisionToS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

Details of the operation to be performed by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#export_revision_to_s3 DataexchangeEventAction#export_revision_to_s3}

---

### DataexchangeEventActionActionExportRevisionToS3 <a name="DataexchangeEventActionActionExportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

&dataexchangeeventaction.DataexchangeEventActionActionExportRevisionToS3 {
	Encryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption,
	RevisionDestination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | Encryption configuration of the export job. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination">RevisionDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | A revision destination is the Amazon S3 bucket folder destination to where the export will be sent. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption"></a>

```go
Encryption DataexchangeEventActionActionExportRevisionToS3Encryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

Encryption configuration of the export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#encryption DataexchangeEventAction#encryption}

---

##### `RevisionDestination`<sup>Optional</sup> <a name="RevisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination"></a>

```go
RevisionDestination DataexchangeEventActionActionExportRevisionToS3RevisionDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#revision_destination DataexchangeEventAction#revision_destination}

---

### DataexchangeEventActionActionExportRevisionToS3Encryption <a name="DataexchangeEventActionActionExportRevisionToS3Encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

&dataexchangeeventaction.DataexchangeEventActionActionExportRevisionToS3Encryption {
	KmsKeyArn: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type">Type</a></code> | <code>*string</code> | The type of server side encryption used for encrypting the objects in Amazon S3. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of server side encryption used for encrypting the objects in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}

---

### DataexchangeEventActionActionExportRevisionToS3RevisionDestination <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

&dataexchangeeventaction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination {
	Bucket: *string,
	KeyPattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket">Bucket</a></code> | <code>*string</code> | The Amazon S3 bucket that is the destination for the event action. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern">KeyPattern</a></code> | <code>*string</code> | A string representing the pattern for generated names of the individual assets in the revision. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The Amazon S3 bucket that is the destination for the event action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}

---

##### `KeyPattern`<sup>Optional</sup> <a name="KeyPattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern"></a>

```go
KeyPattern *string
```

- *Type:* *string

A string representing the pattern for generated names of the individual assets in the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}

---

### DataexchangeEventActionConfig <a name="DataexchangeEventActionConfig" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

&dataexchangeeventaction.DataexchangeEventActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Action: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dataexchangeEventAction.DataexchangeEventActionAction,
	Event: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dataexchangeEventAction.DataexchangeEventActionEvent,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a></code> | What occurs after a certain event. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.event">Event</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a></code> | What occurs to start an action. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the event action. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.action"></a>

```go
Action DataexchangeEventActionAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

What occurs after a certain event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.event"></a>

```go
Event DataexchangeEventActionEvent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

What occurs to start an action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the event action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#tags DataexchangeEventAction#tags}

---

### DataexchangeEventActionEvent <a name="DataexchangeEventActionEvent" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

&dataexchangeeventaction.DataexchangeEventActionEvent {
	RevisionPublished: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished">RevisionPublished</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a></code> | Information about the published revision. |

---

##### `RevisionPublished`<sup>Optional</sup> <a name="RevisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished"></a>

```go
RevisionPublished DataexchangeEventActionEventRevisionPublished
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

Information about the published revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#revision_published DataexchangeEventAction#revision_published}

---

### DataexchangeEventActionEventRevisionPublished <a name="DataexchangeEventActionEventRevisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

&dataexchangeeventaction.DataexchangeEventActionEventRevisionPublished {
	DataSetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId">DataSetId</a></code> | <code>*string</code> | The data set ID of the published revision. |

---

##### `DataSetId`<sup>Optional</sup> <a name="DataSetId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId"></a>

```go
DataSetId *string
```

- *Type:* *string

The data set ID of the published revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}

---

### DataexchangeEventActionTags <a name="DataexchangeEventActionTags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

&dataexchangeeventaction.DataexchangeEventActionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#key DataexchangeEventAction#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/dataexchange_event_action#value DataexchangeEventAction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.NewDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeEventActionActionExportRevisionToS3OutputReference <a name="DataexchangeEventActionActionExportRevisionToS3OutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.NewDataexchangeEventActionActionExportRevisionToS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataexchangeEventActionActionExportRevisionToS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination">PutRevisionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination">ResetRevisionDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption"></a>

```go
func PutEncryption(value DataexchangeEventActionActionExportRevisionToS3Encryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

---

##### `PutRevisionDestination` <a name="PutRevisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination"></a>

```go
func PutRevisionDestination(value DataexchangeEventActionActionExportRevisionToS3RevisionDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetRevisionDestination` <a name="ResetRevisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination"></a>

```go
func ResetRevisionDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination">RevisionDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput">RevisionDestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption"></a>

```go
func Encryption() DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a>

---

##### `RevisionDestination`<sup>Required</sup> <a name="RevisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination"></a>

```go
func RevisionDestination() DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `RevisionDestinationInput`<sup>Optional</sup> <a name="RevisionDestinationInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput"></a>

```go
func RevisionDestinationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.NewDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern">ResetKeyPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetKeyPattern` <a name="ResetKeyPattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern"></a>

```go
func ResetKeyPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput">KeyPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern">KeyPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyPatternInput`<sup>Optional</sup> <a name="KeyPatternInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput"></a>

```go
func KeyPatternInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `KeyPattern`<sup>Required</sup> <a name="KeyPattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern"></a>

```go
func KeyPattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeEventActionActionOutputReference <a name="DataexchangeEventActionActionOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.NewDataexchangeEventActionActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataexchangeEventActionActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3">PutExportRevisionToS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3">ResetExportRevisionToS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExportRevisionToS3` <a name="PutExportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3"></a>

```go
func PutExportRevisionToS3(value DataexchangeEventActionActionExportRevisionToS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

---

##### `ResetExportRevisionToS3` <a name="ResetExportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3"></a>

```go
func ResetExportRevisionToS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3">ExportRevisionToS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference">DataexchangeEventActionActionExportRevisionToS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input">ExportRevisionToS3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportRevisionToS3`<sup>Required</sup> <a name="ExportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3"></a>

```go
func ExportRevisionToS3() DataexchangeEventActionActionExportRevisionToS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference">DataexchangeEventActionActionExportRevisionToS3OutputReference</a>

---

##### `ExportRevisionToS3Input`<sup>Optional</sup> <a name="ExportRevisionToS3Input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input"></a>

```go
func ExportRevisionToS3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeEventActionEventOutputReference <a name="DataexchangeEventActionEventOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.NewDataexchangeEventActionEventOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataexchangeEventActionEventOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished">PutRevisionPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished">ResetRevisionPublished</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRevisionPublished` <a name="PutRevisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished"></a>

```go
func PutRevisionPublished(value DataexchangeEventActionEventRevisionPublished)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

---

##### `ResetRevisionPublished` <a name="ResetRevisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished"></a>

```go
func ResetRevisionPublished()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished">RevisionPublished</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference">DataexchangeEventActionEventRevisionPublishedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput">RevisionPublishedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevisionPublished`<sup>Required</sup> <a name="RevisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished"></a>

```go
func RevisionPublished() DataexchangeEventActionEventRevisionPublishedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference">DataexchangeEventActionEventRevisionPublishedOutputReference</a>

---

##### `RevisionPublishedInput`<sup>Optional</sup> <a name="RevisionPublishedInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput"></a>

```go
func RevisionPublishedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeEventActionEventRevisionPublishedOutputReference <a name="DataexchangeEventActionEventRevisionPublishedOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.NewDataexchangeEventActionEventRevisionPublishedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataexchangeEventActionEventRevisionPublishedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resetDataSetId">ResetDataSetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSetId` <a name="ResetDataSetId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resetDataSetId"></a>

```go
func ResetDataSetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput">DataSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId">DataSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetIdInput`<sup>Optional</sup> <a name="DataSetIdInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput"></a>

```go
func DataSetIdInput() *string
```

- *Type:* *string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId"></a>

```go
func DataSetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeEventActionTagsList <a name="DataexchangeEventActionTagsList" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.NewDataexchangeEventActionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataexchangeEventActionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.get"></a>

```go
func Get(index *f64) DataexchangeEventActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataexchangeEventActionTagsOutputReference <a name="DataexchangeEventActionTagsOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataexchangeeventaction"

dataexchangeeventaction.NewDataexchangeEventActionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataexchangeEventActionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



