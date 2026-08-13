# `glueTrigger` Submodule <a name="`glueTrigger` Submodule" id="@cdktn/provider-awscc.glueTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTrigger <a name="GlueTrigger" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger awscc_glue_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.NewGlueTrigger(scope Construct, id *string, config GlueTriggerConfig) GlueTrigger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition">PutEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetEventBatchingCondition">ResetEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetPredicate">ResetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetStartOnCreation">ResetStartOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventBatchingCondition` <a name="PutEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition"></a>

```go
func PutEventBatchingCondition(value GlueTriggerEventBatchingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate"></a>

```go
func PutPredicate(value GlueTriggerPredicate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEventBatchingCondition` <a name="ResetEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetEventBatchingCondition"></a>

```go
func ResetEventBatchingCondition()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetName"></a>

```go
func ResetName()
```

##### `ResetPredicate` <a name="ResetPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetPredicate"></a>

```go
func ResetPredicate()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetStartOnCreation` <a name="ResetStartOnCreation" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetStartOnCreation"></a>

```go
func ResetStartOnCreation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetWorkflowName"></a>

```go
func ResetWorkflowName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.GlueTrigger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.GlueTrigger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.GlueTrigger_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.GlueTrigger_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueTrigger resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingCondition">EventBatchingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference">GlueTriggerEventBatchingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicate">Predicate</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingConditionInput">EventBatchingConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicateInput">PredicateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreationInput">StartOnCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowNameInput">WorkflowNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreation">StartOnCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actions"></a>

```go
func Actions() GlueTriggerActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a>

---

##### `EventBatchingCondition`<sup>Required</sup> <a name="EventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingCondition"></a>

```go
func EventBatchingCondition() GlueTriggerEventBatchingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference">GlueTriggerEventBatchingConditionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicate"></a>

```go
func Predicate() GlueTriggerPredicateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventBatchingConditionInput`<sup>Optional</sup> <a name="EventBatchingConditionInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingConditionInput"></a>

```go
func EventBatchingConditionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicateInput"></a>

```go
func PredicateInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `StartOnCreationInput`<sup>Optional</sup> <a name="StartOnCreationInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreationInput"></a>

```go
func StartOnCreationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowNameInput"></a>

```go
func WorkflowNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `StartOnCreation`<sup>Required</sup> <a name="StartOnCreation" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreation"></a>

```go
func StartOnCreation() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTriggerActions <a name="GlueTriggerActions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

&gluetrigger.GlueTriggerActions {
	Arguments: *string,
	CrawlerName: *string,
	JobName: *string,
	NotificationProperty: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueTrigger.GlueTriggerActionsNotificationProperty,
	SecurityConfiguration: *string,
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.arguments">Arguments</a></code> | <code>*string</code> | The job arguments used when this trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.crawlerName">CrawlerName</a></code> | <code>*string</code> | The name of the crawler to be used with this action. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.jobName">JobName</a></code> | <code>*string</code> | The name of a job to be executed. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | Specifies configuration properties of a job run notification. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | The name of the SecurityConfiguration structure to be used with this action. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.timeout">Timeout</a></code> | <code>*f64</code> | The JobRun timeout in minutes. |

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.arguments"></a>

```go
Arguments *string
```

- *Type:* *string

The job arguments used when this trigger fires.

For this job run, they replace the default arguments set in the job definition itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#arguments GlueTrigger#arguments}

---

##### `CrawlerName`<sup>Optional</sup> <a name="CrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.crawlerName"></a>

```go
CrawlerName *string
```

- *Type:* *string

The name of the crawler to be used with this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

The name of a job to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}

---

##### `NotificationProperty`<sup>Optional</sup> <a name="NotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.notificationProperty"></a>

```go
NotificationProperty GlueTriggerActionsNotificationProperty
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

Specifies configuration properties of a job run notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#notification_property GlueTrigger#notification_property}

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.securityConfiguration"></a>

```go
SecurityConfiguration *string
```

- *Type:* *string

The name of the SecurityConfiguration structure to be used with this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#security_configuration GlueTrigger#security_configuration}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The JobRun timeout in minutes.

This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#timeout GlueTrigger#timeout}

---

### GlueTriggerActionsNotificationProperty <a name="GlueTriggerActionsNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

&gluetrigger.GlueTriggerActionsNotificationProperty {
	NotifyDelayAfter: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>*f64</code> | After a job run starts, the number of minutes to wait before sending a job run delay notification. |

---

##### `NotifyDelayAfter`<sup>Optional</sup> <a name="NotifyDelayAfter" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter"></a>

```go
NotifyDelayAfter *f64
```

- *Type:* *f64

After a job run starts, the number of minutes to wait before sending a job run delay notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}

---

### GlueTriggerConfig <a name="GlueTriggerConfig" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

&gluetrigger.GlueTriggerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Actions: interface{},
	Type: *string,
	Description: *string,
	EventBatchingCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueTrigger.GlueTriggerEventBatchingCondition,
	Name: *string,
	Predicate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueTrigger.GlueTriggerPredicate,
	Schedule: *string,
	StartOnCreation: interface{},
	Tags: *string,
	WorkflowName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.actions">Actions</a></code> | <code>interface{}</code> | The actions initiated by this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.type">Type</a></code> | <code>*string</code> | The type of trigger that this is. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.description">Description</a></code> | <code>*string</code> | A description of this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition">EventBatchingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.name">Name</a></code> | <code>*string</code> | The name of the trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | The predicate of this trigger, which defines when it will fire. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.schedule">Schedule</a></code> | <code>*string</code> | A cron expression used to specify the schedule. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.startOnCreation">StartOnCreation</a></code> | <code>interface{}</code> | Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.tags">Tags</a></code> | <code>*string</code> | The tags to use with this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.workflowName">WorkflowName</a></code> | <code>*string</code> | The name of the workflow associated with the trigger. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

The actions initiated by this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#actions GlueTrigger#actions}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of trigger that this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#type GlueTrigger#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#description GlueTrigger#description}

---

##### `EventBatchingCondition`<sup>Optional</sup> <a name="EventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition"></a>

```go
EventBatchingCondition GlueTriggerEventBatchingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#name GlueTrigger#name}

---

##### `Predicate`<sup>Optional</sup> <a name="Predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.predicate"></a>

```go
Predicate GlueTriggerPredicate
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

The predicate of this trigger, which defines when it will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#predicate GlueTrigger#predicate}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

A cron expression used to specify the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#schedule GlueTrigger#schedule}

---

##### `StartOnCreation`<sup>Optional</sup> <a name="StartOnCreation" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.startOnCreation"></a>

```go
StartOnCreation interface{}
```

- *Type:* interface{}

Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#start_on_creation GlueTrigger#start_on_creation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

The tags to use with this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#tags GlueTrigger#tags}

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.workflowName"></a>

```go
WorkflowName *string
```

- *Type:* *string

The name of the workflow associated with the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#workflow_name GlueTrigger#workflow_name}

---

### GlueTriggerEventBatchingCondition <a name="GlueTriggerEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

&gluetrigger.GlueTriggerEventBatchingCondition {
	BatchSize: *f64,
	BatchWindow: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow">BatchWindow</a></code> | <code>*f64</code> | Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received. |

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#batch_size GlueTrigger#batch_size}

---

##### `BatchWindow`<sup>Optional</sup> <a name="BatchWindow" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow"></a>

```go
BatchWindow *f64
```

- *Type:* *f64

Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#batch_window GlueTrigger#batch_window}

---

### GlueTriggerPredicate <a name="GlueTriggerPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

&gluetrigger.GlueTriggerPredicate {
	Conditions: interface{},
	Logical: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.conditions">Conditions</a></code> | <code>interface{}</code> | A list of the conditions that determine when the trigger will fire. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.logical">Logical</a></code> | <code>*string</code> | An optional field if only one condition is listed. If multiple conditions are listed, then this field is required. |

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

A list of the conditions that determine when the trigger will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#conditions GlueTrigger#conditions}

---

##### `Logical`<sup>Optional</sup> <a name="Logical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.logical"></a>

```go
Logical *string
```

- *Type:* *string

An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#logical GlueTrigger#logical}

---

### GlueTriggerPredicateConditions <a name="GlueTriggerPredicateConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

&gluetrigger.GlueTriggerPredicateConditions {
	CrawlerName: *string,
	CrawlState: *string,
	JobName: *string,
	LogicalOperator: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName">CrawlerName</a></code> | <code>*string</code> | The name of the crawler to which this condition applies. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlState">CrawlState</a></code> | <code>*string</code> | The state of the crawler to which this condition applies. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.jobName">JobName</a></code> | <code>*string</code> | The name of the job whose JobRuns this condition applies to, and on which this trigger waits. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator">LogicalOperator</a></code> | <code>*string</code> | A logical operator. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.state">State</a></code> | <code>*string</code> | The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED. |

---

##### `CrawlerName`<sup>Optional</sup> <a name="CrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName"></a>

```go
CrawlerName *string
```

- *Type:* *string

The name of the crawler to which this condition applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}

---

##### `CrawlState`<sup>Optional</sup> <a name="CrawlState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlState"></a>

```go
CrawlState *string
```

- *Type:* *string

The state of the crawler to which this condition applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#crawl_state GlueTrigger#crawl_state}

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

The name of the job whose JobRuns this condition applies to, and on which this trigger waits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}

---

##### `LogicalOperator`<sup>Optional</sup> <a name="LogicalOperator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator"></a>

```go
LogicalOperator *string
```

- *Type:* *string

A logical operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#logical_operator GlueTrigger#logical_operator}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.state"></a>

```go
State *string
```

- *Type:* *string

The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_trigger#state GlueTrigger#state}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTriggerActionsList <a name="GlueTriggerActionsList" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.NewGlueTriggerActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueTriggerActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get"></a>

```go
func Get(index *f64) GlueTriggerActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerActionsNotificationPropertyOutputReference <a name="GlueTriggerActionsNotificationPropertyOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.NewGlueTriggerActionsNotificationPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueTriggerActionsNotificationPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter">ResetNotifyDelayAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotifyDelayAfter` <a name="ResetNotifyDelayAfter" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```go
func ResetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput">NotifyDelayAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotifyDelayAfterInput`<sup>Optional</sup> <a name="NotifyDelayAfterInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```go
func NotifyDelayAfterInput() *f64
```

- *Type:* *f64

---

##### `NotifyDelayAfter`<sup>Required</sup> <a name="NotifyDelayAfter" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```go
func NotifyDelayAfter() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerActionsOutputReference <a name="GlueTriggerActionsOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.NewGlueTriggerActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueTriggerActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty">PutNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName">ResetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty">ResetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationProperty` <a name="PutNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty"></a>

```go
func PutNotificationProperty(value GlueTriggerActionsNotificationProperty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetCrawlerName` <a name="ResetCrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName"></a>

```go
func ResetCrawlerName()
```

##### `ResetJobName` <a name="ResetJobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetJobName"></a>

```go
func ResetJobName()
```

##### `ResetNotificationProperty` <a name="ResetNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty"></a>

```go
func ResetNotificationProperty()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration"></a>

```go
func ResetSecurityConfiguration()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput">CrawlerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput">NotificationPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.arguments">Arguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName">CrawlerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationProperty`<sup>Required</sup> <a name="NotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty"></a>

```go
func NotificationProperty() GlueTriggerActionsNotificationPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput"></a>

```go
func ArgumentsInput() *string
```

- *Type:* *string

---

##### `CrawlerNameInput`<sup>Optional</sup> <a name="CrawlerNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput"></a>

```go
func CrawlerNameInput() *string
```

- *Type:* *string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `NotificationPropertyInput`<sup>Optional</sup> <a name="NotificationPropertyInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput"></a>

```go
func NotificationPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput"></a>

```go
func SecurityConfigurationInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.arguments"></a>

```go
func Arguments() *string
```

- *Type:* *string

---

##### `CrawlerName`<sup>Required</sup> <a name="CrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName"></a>

```go
func CrawlerName() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration"></a>

```go
func SecurityConfiguration() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerEventBatchingConditionOutputReference <a name="GlueTriggerEventBatchingConditionOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.NewGlueTriggerEventBatchingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueTriggerEventBatchingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow">ResetBatchWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchSize"></a>

```go
func ResetBatchSize()
```

##### `ResetBatchWindow` <a name="ResetBatchWindow" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow"></a>

```go
func ResetBatchWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput">BatchWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow">BatchWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `BatchWindowInput`<sup>Optional</sup> <a name="BatchWindowInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput"></a>

```go
func BatchWindowInput() *f64
```

- *Type:* *f64

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `BatchWindow`<sup>Required</sup> <a name="BatchWindow" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow"></a>

```go
func BatchWindow() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerPredicateConditionsList <a name="GlueTriggerPredicateConditionsList" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.NewGlueTriggerPredicateConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueTriggerPredicateConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get"></a>

```go
func Get(index *f64) GlueTriggerPredicateConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerPredicateConditionsOutputReference <a name="GlueTriggerPredicateConditionsOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.NewGlueTriggerPredicateConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueTriggerPredicateConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName">ResetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState">ResetCrawlState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator">ResetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrawlerName` <a name="ResetCrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName"></a>

```go
func ResetCrawlerName()
```

##### `ResetCrawlState` <a name="ResetCrawlState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState"></a>

```go
func ResetCrawlState()
```

##### `ResetJobName` <a name="ResetJobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName"></a>

```go
func ResetJobName()
```

##### `ResetLogicalOperator` <a name="ResetLogicalOperator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator"></a>

```go
func ResetLogicalOperator()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput">CrawlerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput">CrawlStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput">LogicalOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName">CrawlerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState">CrawlState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrawlerNameInput`<sup>Optional</sup> <a name="CrawlerNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput"></a>

```go
func CrawlerNameInput() *string
```

- *Type:* *string

---

##### `CrawlStateInput`<sup>Optional</sup> <a name="CrawlStateInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput"></a>

```go
func CrawlStateInput() *string
```

- *Type:* *string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `LogicalOperatorInput`<sup>Optional</sup> <a name="LogicalOperatorInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput"></a>

```go
func LogicalOperatorInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CrawlerName`<sup>Required</sup> <a name="CrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName"></a>

```go
func CrawlerName() *string
```

- *Type:* *string

---

##### `CrawlState`<sup>Required</sup> <a name="CrawlState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState"></a>

```go
func CrawlState() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator"></a>

```go
func LogicalOperator() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerPredicateOutputReference <a name="GlueTriggerPredicateOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluetrigger"

gluetrigger.NewGlueTriggerPredicateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueTriggerPredicateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical">ResetLogical</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetLogical` <a name="ResetLogical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical"></a>

```go
func ResetLogical()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput">LogicalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logical">Logical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions"></a>

```go
func Conditions() GlueTriggerPredicateConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `LogicalInput`<sup>Optional</sup> <a name="LogicalInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput"></a>

```go
func LogicalInput() *string
```

- *Type:* *string

---

##### `Logical`<sup>Required</sup> <a name="Logical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logical"></a>

```go
func Logical() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



