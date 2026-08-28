# `rtbfabricLinkRoutingRule` Submodule <a name="`rtbfabricLinkRoutingRule` Submodule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricLinkRoutingRule <a name="RtbfabricLinkRoutingRule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule awscc_rtbfabric_link_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

rtbfabriclinkroutingrule.NewRtbfabricLinkRoutingRule(scope Construct, id *string, config RtbfabricLinkRoutingRuleConfig) RtbfabricLinkRoutingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig">RtbfabricLinkRoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig">RtbfabricLinkRoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions"></a>

```go
func PutConditions(value RtbfabricLinkRoutingRuleConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

rtbfabriclinkroutingrule.RtbfabricLinkRoutingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

rtbfabriclinkroutingrule.RtbfabricLinkRoutingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

rtbfabriclinkroutingrule.RtbfabricLinkRoutingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

rtbfabriclinkroutingrule.RtbfabricLinkRoutingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RtbfabricLinkRoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RtbfabricLinkRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricLinkRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput">LinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId">LinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions"></a>

```go
func Conditions() RtbfabricLinkRoutingRuleConditionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags"></a>

```go
func Tags() RtbfabricLinkRoutingRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp"></a>

```go
func UpdatedTimestamp() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `LinkIdInput`<sup>Optional</sup> <a name="LinkIdInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput"></a>

```go
func LinkIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId"></a>

```go
func LinkId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricLinkRoutingRuleConditions <a name="RtbfabricLinkRoutingRuleConditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

&rtbfabriclinkroutingrule.RtbfabricLinkRoutingRuleConditions {
	HostHeader: *string,
	HostHeaderWildcard: *string,
	PathExact: *string,
	PathPrefix: *string,
	QueryStringEquals: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals,
	QueryStringExists: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader">HostHeader</a></code> | <code>*string</code> | Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard">HostHeaderWildcard</a></code> | <code>*string</code> | Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact">PathExact</a></code> | <code>*string</code> | Exact path match ? must start with /. Mutually exclusive with PathPrefix. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals">QueryStringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | Query string key=value pair match (single pair). |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists">QueryStringExists</a></code> | <code>*string</code> | Query string key presence check (any value accepted). |

---

##### `HostHeader`<sup>Optional</sup> <a name="HostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader"></a>

```go
HostHeader *string
```

- *Type:* *string

Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#host_header RtbfabricLinkRoutingRule#host_header}

---

##### `HostHeaderWildcard`<sup>Optional</sup> <a name="HostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard"></a>

```go
HostHeaderWildcard *string
```

- *Type:* *string

Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#host_header_wildcard RtbfabricLinkRoutingRule#host_header_wildcard}

---

##### `PathExact`<sup>Optional</sup> <a name="PathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact"></a>

```go
PathExact *string
```

- *Type:* *string

Exact path match ? must start with /. Mutually exclusive with PathPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#path_exact RtbfabricLinkRoutingRule#path_exact}

---

##### `PathPrefix`<sup>Optional</sup> <a name="PathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix"></a>

```go
PathPrefix *string
```

- *Type:* *string

Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#path_prefix RtbfabricLinkRoutingRule#path_prefix}

---

##### `QueryStringEquals`<sup>Optional</sup> <a name="QueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals"></a>

```go
QueryStringEquals RtbfabricLinkRoutingRuleConditionsQueryStringEquals
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

Query string key=value pair match (single pair).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#query_string_equals RtbfabricLinkRoutingRule#query_string_equals}

---

##### `QueryStringExists`<sup>Optional</sup> <a name="QueryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists"></a>

```go
QueryStringExists *string
```

- *Type:* *string

Query string key presence check (any value accepted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#query_string_exists RtbfabricLinkRoutingRule#query_string_exists}

---

### RtbfabricLinkRoutingRuleConditionsQueryStringEquals <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

&rtbfabriclinkroutingrule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key">Key</a></code> | <code>*string</code> | Query string key ? RFC 3986 unreserved characters. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value">Value</a></code> | <code>*string</code> | Query string value ? RFC 3986 unreserved characters. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key"></a>

```go
Key *string
```

- *Type:* *string

Query string key ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value"></a>

```go
Value *string
```

- *Type:* *string

Query string value ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

### RtbfabricLinkRoutingRuleConfig <a name="RtbfabricLinkRoutingRuleConfig" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

&rtbfabriclinkroutingrule.RtbfabricLinkRoutingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Conditions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions,
	GatewayId: *string,
	LinkId: *string,
	Priority: *f64,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | Conditions for a routing rule. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId">LinkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the LinkRoutingRule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions"></a>

```go
Conditions RtbfabricLinkRoutingRuleConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

Conditions for a routing rule.

All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#conditions RtbfabricLinkRoutingRule#conditions}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}.

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId"></a>

```go
LinkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the LinkRoutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#tags RtbfabricLinkRoutingRule#tags}

---

### RtbfabricLinkRoutingRuleTags <a name="RtbfabricLinkRoutingRuleTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

&rtbfabriclinkroutingrule.RtbfabricLinkRoutingRuleTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricLinkRoutingRuleConditionsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

rtbfabriclinkroutingrule.NewRtbfabricLinkRoutingRuleConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricLinkRoutingRuleConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals">PutQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader">ResetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard">ResetHostHeaderWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact">ResetPathExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix">ResetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals">ResetQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists">ResetQueryStringExists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueryStringEquals` <a name="PutQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals"></a>

```go
func PutQueryStringEquals(value RtbfabricLinkRoutingRuleConditionsQueryStringEquals)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---

##### `ResetHostHeader` <a name="ResetHostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader"></a>

```go
func ResetHostHeader()
```

##### `ResetHostHeaderWildcard` <a name="ResetHostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard"></a>

```go
func ResetHostHeaderWildcard()
```

##### `ResetPathExact` <a name="ResetPathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact"></a>

```go
func ResetPathExact()
```

##### `ResetPathPrefix` <a name="ResetPathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix"></a>

```go
func ResetPathPrefix()
```

##### `ResetQueryStringEquals` <a name="ResetQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals"></a>

```go
func ResetQueryStringEquals()
```

##### `ResetQueryStringExists` <a name="ResetQueryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists"></a>

```go
func ResetQueryStringExists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals">QueryStringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput">HostHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput">HostHeaderWildcardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput">PathExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput">PathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput">QueryStringEqualsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput">QueryStringExistsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader">HostHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard">HostHeaderWildcard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact">PathExact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists">QueryStringExists</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryStringEquals`<sup>Required</sup> <a name="QueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals"></a>

```go
func QueryStringEquals() RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a>

---

##### `HostHeaderInput`<sup>Optional</sup> <a name="HostHeaderInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput"></a>

```go
func HostHeaderInput() *string
```

- *Type:* *string

---

##### `HostHeaderWildcardInput`<sup>Optional</sup> <a name="HostHeaderWildcardInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput"></a>

```go
func HostHeaderWildcardInput() *string
```

- *Type:* *string

---

##### `PathExactInput`<sup>Optional</sup> <a name="PathExactInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput"></a>

```go
func PathExactInput() *string
```

- *Type:* *string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput"></a>

```go
func PathPrefixInput() *string
```

- *Type:* *string

---

##### `QueryStringEqualsInput`<sup>Optional</sup> <a name="QueryStringEqualsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput"></a>

```go
func QueryStringEqualsInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringExistsInput`<sup>Optional</sup> <a name="QueryStringExistsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput"></a>

```go
func QueryStringExistsInput() *string
```

- *Type:* *string

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader"></a>

```go
func HostHeader() *string
```

- *Type:* *string

---

##### `HostHeaderWildcard`<sup>Required</sup> <a name="HostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard"></a>

```go
func HostHeaderWildcard() *string
```

- *Type:* *string

---

##### `PathExact`<sup>Required</sup> <a name="PathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact"></a>

```go
func PathExact() *string
```

- *Type:* *string

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix"></a>

```go
func PathPrefix() *string
```

- *Type:* *string

---

##### `QueryStringExists`<sup>Required</sup> <a name="QueryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists"></a>

```go
func QueryStringExists() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

rtbfabriclinkroutingrule.NewRtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricLinkRoutingRuleTagsList <a name="RtbfabricLinkRoutingRuleTagsList" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

rtbfabriclinkroutingrule.NewRtbfabricLinkRoutingRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RtbfabricLinkRoutingRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get"></a>

```go
func Get(index *f64) RtbfabricLinkRoutingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricLinkRoutingRuleTagsOutputReference <a name="RtbfabricLinkRoutingRuleTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabriclinkroutingrule"

rtbfabriclinkroutingrule.NewRtbfabricLinkRoutingRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RtbfabricLinkRoutingRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



