# `customerprofilesEventTrigger` Submodule <a name="`customerprofilesEventTrigger` Submodule" id="@cdktn/provider-awscc.customerprofilesEventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesEventTrigger <a name="CustomerprofilesEventTrigger" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTrigger(scope Construct, id *string, config CustomerprofilesEventTriggerConfig) CustomerprofilesEventTrigger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig">CustomerprofilesEventTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig">CustomerprofilesEventTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions">PutEventTriggerConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits">PutEventTriggerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetEventTriggerLimits">ResetEventTriggerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetSegmentFilter">ResetSegmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventTriggerConditions` <a name="PutEventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions"></a>

```go
func PutEventTriggerConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventTriggerLimits` <a name="PutEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits"></a>

```go
func PutEventTriggerLimits(value CustomerprofilesEventTriggerEventTriggerLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEventTriggerLimits` <a name="ResetEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetEventTriggerLimits"></a>

```go
func ResetEventTriggerLimits()
```

##### `ResetSegmentFilter` <a name="ResetSegmentFilter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetSegmentFilter"></a>

```go
func ResetSegmentFilter()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.CustomerprofilesEventTrigger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.CustomerprofilesEventTrigger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.CustomerprofilesEventTrigger_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.CustomerprofilesEventTrigger_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CustomerprofilesEventTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CustomerprofilesEventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesEventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditions">EventTriggerConditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList">CustomerprofilesEventTriggerEventTriggerConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimits">EventTriggerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference">CustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList">CustomerprofilesEventTriggerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditionsInput">EventTriggerConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimitsInput">EventTriggerLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerNameInput">EventTriggerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeNameInput">ObjectTypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilterInput">SegmentFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerName">EventTriggerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeName">ObjectTypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilter">SegmentFilter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EventTriggerConditions`<sup>Required</sup> <a name="EventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditions"></a>

```go
func EventTriggerConditions() CustomerprofilesEventTriggerEventTriggerConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList">CustomerprofilesEventTriggerEventTriggerConditionsList</a>

---

##### `EventTriggerLimits`<sup>Required</sup> <a name="EventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimits"></a>

```go
func EventTriggerLimits() CustomerprofilesEventTriggerEventTriggerLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference">CustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tags"></a>

```go
func Tags() CustomerprofilesEventTriggerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList">CustomerprofilesEventTriggerTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `EventTriggerConditionsInput`<sup>Optional</sup> <a name="EventTriggerConditionsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditionsInput"></a>

```go
func EventTriggerConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `EventTriggerLimitsInput`<sup>Optional</sup> <a name="EventTriggerLimitsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimitsInput"></a>

```go
func EventTriggerLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `EventTriggerNameInput`<sup>Optional</sup> <a name="EventTriggerNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerNameInput"></a>

```go
func EventTriggerNameInput() *string
```

- *Type:* *string

---

##### `ObjectTypeNameInput`<sup>Optional</sup> <a name="ObjectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeNameInput"></a>

```go
func ObjectTypeNameInput() *string
```

- *Type:* *string

---

##### `SegmentFilterInput`<sup>Optional</sup> <a name="SegmentFilterInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilterInput"></a>

```go
func SegmentFilterInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EventTriggerName`<sup>Required</sup> <a name="EventTriggerName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerName"></a>

```go
func EventTriggerName() *string
```

- *Type:* *string

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeName"></a>

```go
func ObjectTypeName() *string
```

- *Type:* *string

---

##### `SegmentFilter`<sup>Required</sup> <a name="SegmentFilter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilter"></a>

```go
func SegmentFilter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesEventTriggerConfig <a name="CustomerprofilesEventTriggerConfig" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

&customerprofileseventtrigger.CustomerprofilesEventTriggerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	EventTriggerConditions: interface{},
	EventTriggerName: *string,
	ObjectTypeName: *string,
	Description: *string,
	EventTriggerLimits: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits,
	SegmentFilter: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.domainName">DomainName</a></code> | <code>*string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerConditions">EventTriggerConditions</a></code> | <code>interface{}</code> | A list of conditions that determine when an event should trigger the destination. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerName">EventTriggerName</a></code> | <code>*string</code> | The unique name of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.objectTypeName">ObjectTypeName</a></code> | <code>*string</code> | The unique name of the object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.description">Description</a></code> | <code>*string</code> | The description of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerLimits">EventTriggerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.segmentFilter">SegmentFilter</a></code> | <code>*string</code> | The destination is triggered only for profiles that meet the criteria of a segment definition. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#domain_name CustomerprofilesEventTrigger#domain_name}

---

##### `EventTriggerConditions`<sup>Required</sup> <a name="EventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerConditions"></a>

```go
EventTriggerConditions interface{}
```

- *Type:* interface{}

A list of conditions that determine when an event should trigger the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#event_trigger_conditions CustomerprofilesEventTrigger#event_trigger_conditions}

---

##### `EventTriggerName`<sup>Required</sup> <a name="EventTriggerName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerName"></a>

```go
EventTriggerName *string
```

- *Type:* *string

The unique name of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#event_trigger_name CustomerprofilesEventTrigger#event_trigger_name}

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.objectTypeName"></a>

```go
ObjectTypeName *string
```

- *Type:* *string

The unique name of the object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#object_type_name CustomerprofilesEventTrigger#object_type_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#description CustomerprofilesEventTrigger#description}

---

##### `EventTriggerLimits`<sup>Optional</sup> <a name="EventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerLimits"></a>

```go
EventTriggerLimits CustomerprofilesEventTriggerEventTriggerLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#event_trigger_limits CustomerprofilesEventTrigger#event_trigger_limits}

---

##### `SegmentFilter`<sup>Optional</sup> <a name="SegmentFilter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.segmentFilter"></a>

```go
SegmentFilter *string
```

- *Type:* *string

The destination is triggered only for profiles that meet the criteria of a segment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#segment_filter CustomerprofilesEventTrigger#segment_filter}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#tags CustomerprofilesEventTrigger#tags}

---

### CustomerprofilesEventTriggerEventTriggerConditions <a name="CustomerprofilesEventTriggerEventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

&customerprofileseventtrigger.CustomerprofilesEventTriggerEventTriggerConditions {
	EventTriggerDimensions: interface{},
	LogicalOperator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.eventTriggerDimensions">EventTriggerDimensions</a></code> | <code>interface{}</code> | A list of dimensions to be evaluated for the event. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.logicalOperator">LogicalOperator</a></code> | <code>*string</code> | The operator used to combine multiple dimensions. |

---

##### `EventTriggerDimensions`<sup>Required</sup> <a name="EventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.eventTriggerDimensions"></a>

```go
EventTriggerDimensions interface{}
```

- *Type:* interface{}

A list of dimensions to be evaluated for the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#event_trigger_dimensions CustomerprofilesEventTrigger#event_trigger_dimensions}

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.logicalOperator"></a>

```go
LogicalOperator *string
```

- *Type:* *string

The operator used to combine multiple dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#logical_operator CustomerprofilesEventTrigger#logical_operator}

---

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

&customerprofileseventtrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions {
	ObjectAttributes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.property.objectAttributes">ObjectAttributes</a></code> | <code>interface{}</code> | A list of object attributes to be evaluated. |

---

##### `ObjectAttributes`<sup>Required</sup> <a name="ObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.property.objectAttributes"></a>

```go
ObjectAttributes interface{}
```

- *Type:* interface{}

A list of object attributes to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#object_attributes CustomerprofilesEventTrigger#object_attributes}

---

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

&customerprofileseventtrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes {
	ComparisonOperator: *string,
	Values: *[]*string,
	FieldName: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | The operator used to compare an attribute against a list of values. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.values">Values</a></code> | <code>*[]*string</code> | A list of attribute values used for comparison. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.fieldName">FieldName</a></code> | <code>*string</code> | A field defined within an object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.source">Source</a></code> | <code>*string</code> | An attribute contained within a source object. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

The operator used to compare an attribute against a list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#comparison_operator CustomerprofilesEventTrigger#comparison_operator}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

A list of attribute values used for comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#values CustomerprofilesEventTrigger#values}

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

A field defined within an object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#field_name CustomerprofilesEventTrigger#field_name}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.source"></a>

```go
Source *string
```

- *Type:* *string

An attribute contained within a source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#source CustomerprofilesEventTrigger#source}

---

### CustomerprofilesEventTriggerEventTriggerLimits <a name="CustomerprofilesEventTriggerEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

&customerprofileseventtrigger.CustomerprofilesEventTriggerEventTriggerLimits {
	EventExpiration: *f64,
	Periods: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.eventExpiration">EventExpiration</a></code> | <code>*f64</code> | Specifies that an event will only trigger the destination if it is processed within a certain latency period. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.periods">Periods</a></code> | <code>interface{}</code> | A list of time periods during which the limits apply. |

---

##### `EventExpiration`<sup>Optional</sup> <a name="EventExpiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.eventExpiration"></a>

```go
EventExpiration *f64
```

- *Type:* *f64

Specifies that an event will only trigger the destination if it is processed within a certain latency period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#event_expiration CustomerprofilesEventTrigger#event_expiration}

---

##### `Periods`<sup>Optional</sup> <a name="Periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.periods"></a>

```go
Periods interface{}
```

- *Type:* interface{}

A list of time periods during which the limits apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#periods CustomerprofilesEventTrigger#periods}

---

### CustomerprofilesEventTriggerEventTriggerLimitsPeriods <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

&customerprofileseventtrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods {
	MaxInvocationsPerProfile: *f64,
	Unit: *string,
	Unlimited: interface{},
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.maxInvocationsPerProfile">MaxInvocationsPerProfile</a></code> | <code>*f64</code> | The maximum allowed number of destination invocations per profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unit">Unit</a></code> | <code>*string</code> | The unit of time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unlimited">Unlimited</a></code> | <code>interface{}</code> | If set to true, there is no limit on the number of destination invocations per profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.value">Value</a></code> | <code>*f64</code> | The amount of time of the specified unit. |

---

##### `MaxInvocationsPerProfile`<sup>Optional</sup> <a name="MaxInvocationsPerProfile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.maxInvocationsPerProfile"></a>

```go
MaxInvocationsPerProfile *f64
```

- *Type:* *f64

The maximum allowed number of destination invocations per profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#max_invocations_per_profile CustomerprofilesEventTrigger#max_invocations_per_profile}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The unit of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#unit CustomerprofilesEventTrigger#unit}

---

##### `Unlimited`<sup>Optional</sup> <a name="Unlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unlimited"></a>

```go
Unlimited interface{}
```

- *Type:* interface{}

If set to true, there is no limit on the number of destination invocations per profile.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#unlimited CustomerprofilesEventTrigger#unlimited}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

The amount of time of the specified unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}

---

### CustomerprofilesEventTriggerTags <a name="CustomerprofilesEventTriggerTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

&customerprofileseventtrigger.CustomerprofilesEventTriggerTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#key CustomerprofilesEventTrigger#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get"></a>

```go
func Get(index *f64) CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get"></a>

```go
func Get(index *f64) CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetFieldName"></a>

```go
func ResetFieldName()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes">PutObjectAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectAttributes` <a name="PutObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes"></a>

```go
func PutObjectAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes">ObjectAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributesInput">ObjectAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectAttributes`<sup>Required</sup> <a name="ObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes"></a>

```go
func ObjectAttributes() CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a>

---

##### `ObjectAttributesInput`<sup>Optional</sup> <a name="ObjectAttributesInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributesInput"></a>

```go
func ObjectAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerEventTriggerConditionsList <a name="CustomerprofilesEventTriggerEventTriggerConditionsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerEventTriggerConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesEventTriggerEventTriggerConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get"></a>

```go
func Get(index *f64) CustomerprofilesEventTriggerEventTriggerConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerEventTriggerConditionsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerEventTriggerConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesEventTriggerEventTriggerConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions">PutEventTriggerDimensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventTriggerDimensions` <a name="PutEventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions"></a>

```go
func PutEventTriggerDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions">EventTriggerDimensions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensionsInput">EventTriggerDimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperatorInput">LogicalOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTriggerDimensions`<sup>Required</sup> <a name="EventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions"></a>

```go
func EventTriggerDimensions() CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a>

---

##### `EventTriggerDimensionsInput`<sup>Optional</sup> <a name="EventTriggerDimensionsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensionsInput"></a>

```go
func EventTriggerDimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `LogicalOperatorInput`<sup>Optional</sup> <a name="LogicalOperatorInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperatorInput"></a>

```go
func LogicalOperatorInput() *string
```

- *Type:* *string

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator"></a>

```go
func LogicalOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerEventTriggerLimitsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerLimitsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerEventTriggerLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomerprofilesEventTriggerEventTriggerLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods">PutPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetEventExpiration">ResetEventExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetPeriods">ResetPeriods</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPeriods` <a name="PutPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods"></a>

```go
func PutPeriods(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEventExpiration` <a name="ResetEventExpiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetEventExpiration"></a>

```go
func ResetEventExpiration()
```

##### `ResetPeriods` <a name="ResetPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetPeriods"></a>

```go
func ResetPeriods()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods">Periods</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpirationInput">EventExpirationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periodsInput">PeriodsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration">EventExpiration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Periods`<sup>Required</sup> <a name="Periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods"></a>

```go
func Periods() CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a>

---

##### `EventExpirationInput`<sup>Optional</sup> <a name="EventExpirationInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpirationInput"></a>

```go
func EventExpirationInput() *f64
```

- *Type:* *f64

---

##### `PeriodsInput`<sup>Optional</sup> <a name="PeriodsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periodsInput"></a>

```go
func PeriodsInput() interface{}
```

- *Type:* interface{}

---

##### `EventExpiration`<sup>Required</sup> <a name="EventExpiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration"></a>

```go
func EventExpiration() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerEventTriggerLimitsPeriodsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get"></a>

```go
func Get(index *f64) CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetMaxInvocationsPerProfile">ResetMaxInvocationsPerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnlimited">ResetUnlimited</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInvocationsPerProfile` <a name="ResetMaxInvocationsPerProfile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetMaxInvocationsPerProfile"></a>

```go
func ResetMaxInvocationsPerProfile()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnit"></a>

```go
func ResetUnit()
```

##### `ResetUnlimited` <a name="ResetUnlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnlimited"></a>

```go
func ResetUnlimited()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfileInput">MaxInvocationsPerProfileInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimitedInput">UnlimitedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile">MaxInvocationsPerProfile</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited">Unlimited</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInvocationsPerProfileInput`<sup>Optional</sup> <a name="MaxInvocationsPerProfileInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfileInput"></a>

```go
func MaxInvocationsPerProfileInput() *f64
```

- *Type:* *f64

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `UnlimitedInput`<sup>Optional</sup> <a name="UnlimitedInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimitedInput"></a>

```go
func UnlimitedInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `MaxInvocationsPerProfile`<sup>Required</sup> <a name="MaxInvocationsPerProfile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile"></a>

```go
func MaxInvocationsPerProfile() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Unlimited`<sup>Required</sup> <a name="Unlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited"></a>

```go
func Unlimited() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerTagsList <a name="CustomerprofilesEventTriggerTagsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CustomerprofilesEventTriggerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get"></a>

```go
func Get(index *f64) CustomerprofilesEventTriggerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CustomerprofilesEventTriggerTagsOutputReference <a name="CustomerprofilesEventTriggerTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/customerprofileseventtrigger"

customerprofileseventtrigger.NewCustomerprofilesEventTriggerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CustomerprofilesEventTriggerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



