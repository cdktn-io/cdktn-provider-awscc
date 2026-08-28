# `codestarnotificationsNotificationRule` Submodule <a name="`codestarnotificationsNotificationRule` Submodule" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarnotificationsNotificationRule <a name="CodestarnotificationsNotificationRule" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule awscc_codestarnotifications_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.NewCodestarnotificationsNotificationRule(scope Construct, id *string, config CodestarnotificationsNotificationRuleConfig) CodestarnotificationsNotificationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig">CodestarnotificationsNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig">CodestarnotificationsNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetEventTypeId">ResetEventTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTargetAddress">ResetTargetAddress</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetEventTypeId` <a name="ResetEventTypeId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetEventTypeId"></a>

```go
func ResetEventTypeId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetAddress` <a name="ResetTargetAddress" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTargetAddress"></a>

```go
func ResetTargetAddress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodestarnotificationsNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.CodestarnotificationsNotificationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.CodestarnotificationsNotificationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.CodestarnotificationsNotificationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.CodestarnotificationsNotificationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CodestarnotificationsNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodestarnotificationsNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodestarnotificationsNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CodestarnotificationsNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList">CodestarnotificationsNotificationRuleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput">DetailTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdInput">EventTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput">EventTypeIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetAddressInput">TargetAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType">DetailType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeId">EventTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds">EventTypeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetAddress">TargetAddress</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targets"></a>

```go
func Targets() CodestarnotificationsNotificationRuleTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList">CodestarnotificationsNotificationRuleTargetsList</a>

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `DetailTypeInput`<sup>Optional</sup> <a name="DetailTypeInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput"></a>

```go
func DetailTypeInput() *string
```

- *Type:* *string

---

##### `EventTypeIdInput`<sup>Optional</sup> <a name="EventTypeIdInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdInput"></a>

```go
func EventTypeIdInput() *string
```

- *Type:* *string

---

##### `EventTypeIdsInput`<sup>Optional</sup> <a name="EventTypeIdsInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput"></a>

```go
func EventTypeIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetAddressInput`<sup>Optional</sup> <a name="TargetAddressInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetAddressInput"></a>

```go
func TargetAddressInput() *string
```

- *Type:* *string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DetailType`<sup>Required</sup> <a name="DetailType" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType"></a>

```go
func DetailType() *string
```

- *Type:* *string

---

##### `EventTypeId`<sup>Required</sup> <a name="EventTypeId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeId"></a>

```go
func EventTypeId() *string
```

- *Type:* *string

---

##### `EventTypeIds`<sup>Required</sup> <a name="EventTypeIds" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds"></a>

```go
func EventTypeIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetAddress`<sup>Required</sup> <a name="TargetAddress" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetAddress"></a>

```go
func TargetAddress() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarnotificationsNotificationRuleConfig <a name="CodestarnotificationsNotificationRuleConfig" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarnotificationsnotificationrule"

&codestarnotificationsnotificationrule.CodestarnotificationsNotificationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DetailType: *string,
	EventTypeIds: *[]*string,
	Name: *string,
	Resource: *string,
	Targets: interface{},
	CreatedBy: *string,
	EventTypeId: *string,
	Status: *string,
	Tags: *map[string]*string,
	TargetAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType">DetailType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds">EventTypeIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.targets">Targets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#targets CodestarnotificationsNotificationRule#targets}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#created_by CodestarnotificationsNotificationRule#created_by}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeId">EventTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_id CodestarnotificationsNotificationRule#event_type_id}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.targetAddress">TargetAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DetailType`<sup>Required</sup> <a name="DetailType" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType"></a>

```go
DetailType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}.

---

##### `EventTypeIds`<sup>Required</sup> <a name="EventTypeIds" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds"></a>

```go
EventTypeIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}.

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#targets CodestarnotificationsNotificationRule#targets}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#created_by CodestarnotificationsNotificationRule#created_by}.

---

##### `EventTypeId`<sup>Optional</sup> <a name="EventTypeId" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeId"></a>

```go
EventTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#event_type_id CodestarnotificationsNotificationRule#event_type_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}.

---

##### `TargetAddress`<sup>Optional</sup> <a name="TargetAddress" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.targetAddress"></a>

```go
TargetAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}.

---

### CodestarnotificationsNotificationRuleTargets <a name="CodestarnotificationsNotificationRuleTargets" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarnotificationsnotificationrule"

&codestarnotificationsnotificationrule.CodestarnotificationsNotificationRuleTargets {
	TargetAddress: *string,
	TargetType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.property.targetAddress">TargetAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.property.targetType">TargetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_type CodestarnotificationsNotificationRule#target_type}. |

---

##### `TargetAddress`<sup>Required</sup> <a name="TargetAddress" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.property.targetAddress"></a>

```go
TargetAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_address CodestarnotificationsNotificationRule#target_address}.

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargets.property.targetType"></a>

```go
TargetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarnotifications_notification_rule#target_type CodestarnotificationsNotificationRule#target_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarnotificationsNotificationRuleTargetsList <a name="CodestarnotificationsNotificationRuleTargetsList" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.NewCodestarnotificationsNotificationRuleTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodestarnotificationsNotificationRuleTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.get"></a>

```go
func Get(index *f64) CodestarnotificationsNotificationRuleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodestarnotificationsNotificationRuleTargetsOutputReference <a name="CodestarnotificationsNotificationRuleTargetsOutputReference" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.NewCodestarnotificationsNotificationRuleTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodestarnotificationsNotificationRuleTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddressInput">TargetAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddress">TargetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetAddressInput`<sup>Optional</sup> <a name="TargetAddressInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddressInput"></a>

```go
func TargetAddressInput() *string
```

- *Type:* *string

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetTypeInput"></a>

```go
func TargetTypeInput() *string
```

- *Type:* *string

---

##### `TargetAddress`<sup>Required</sup> <a name="TargetAddress" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddress"></a>

```go
func TargetAddress() *string
```

- *Type:* *string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



